(function() {
    // =================================================================
    // CONFIGURATION
    // =================================================================
    const GEMINI_API_KEY = (() => {
        if (typeof window !== 'undefined' && window.BC_ENV && window.BC_ENV.GEMINI_API_KEY) {
            return window.BC_ENV.GEMINI_API_KEY;
        }
        return ""; 
    })();

    const STORAGE_KEY = 'bloomcore_unified_history';

    // Prevent running on contact.html (it has its own embedded script)
    if (window.location.pathname.includes('contact.html')) return;

    // =================================================================
    // 1. LLM CONTEXT (For when API works)
    // =================================================================
    const siteContext = `
    COMPANY: Bloomcore Labs (Helsinki).
    LEADERSHIP: Kwabena Atobra (CEO), Eugene Zhukov (CTO).
    AGENTS: Polaris (Structural), Vulcan (Geo), Achilles (PM), Artemis (Env), Icaris (Spatial).
    MANIFESTO: The infrastructure industry is broken due to manual fragmentation. We solve this via Human-Agent Symbiosis.
    LINKS: app.bloomcorelabs.com
    `;

    const systemPrompt = `
        You are 'Sebastian', Customer Relations Agent.
        KNOWLEDGE BASE: ${siteContext}
        TONE: Professional, Terminal-style. Start with "> ".
        If asked for pages, append <<OPEN:filename.html>>.
    `;

    // =================================================================
    // 2. OFFLINE KNOWLEDGE DATABASE (For when API fails)
    // =================================================================
    const FALLBACK_DB = [
        // PERSONNEL
        {
            keywords: ['ceo', 'kwabena', 'atobra', 'founder', 'leader', 'boss'],
            response: "> Kwabena Atobra is our CEO & Co-Founder. He is an Engineer & FEA Specialist (MSc ETH Zurich). <<OPEN:about.html>>"
        },
        {
            keywords: ['cto', 'eugene', 'zhukov', 'tech lead'],
            response: "> Eugene Zhukov is our CTO & Co-Founder. He is a software veteran with 20+ years of experience at Airbus and Nokia. <<OPEN:about.html>>"
        },
        {
            keywords: ['team', 'staff', 'people', 'who works'],
            response: "> Our team consists of human experts (Kwabena & Eugene) and 5 autonomous agents including Polaris and Sebastian. <<OPEN:about.html>>"
        },
        
        // TECHNOLOGY & AGENTS
        {
            keywords: ['polaris', 'structural', 'structure'],
            response: "> Polaris-1 (v1.2) is our Structural Engineering Agent. It handles automated 3D geometry, load analysis, and Eurocode/AISC compliance. <<OPEN:technology.html>>"
        },
        {
            keywords: ['vulcan', 'geo', 'soil'],
            response: "> Vulcan (v0.4 Beta) is our Geotechnical Agent. It analyzes soil reports to optimize foundations. <<OPEN:technology.html>>"
        },
        {
            keywords: ['achilles', 'project management', 'pm'],
            response: "> Achilles is our Project Management Agent (Roadmap Q2 2026). It optimizes critical paths and workflows. <<OPEN:technology.html>>"
        },
        {
            keywords: ['stack', 'python', 'ifc', 'blender', 'tech'],
            response: "> Our stack is Python-based, utilizing BlenderBIM, IFC.js for geometry, and OpenSees for Finite Element Analysis (FEA). <<OPEN:technology.html>>"
        },

        // MANIFESTO & MISSION
        {
            keywords: ['manifesto', 'mission', 'vision', 'believe', 'broken'],
            response: "> We believe the construction industry is broken by manual processes. Our mission is 'Human-Agent Symbiosis'—agents do the work, humans provide creative oversight. <<OPEN:manifesto.html>>"
        },
        {
            keywords: ['symbiosis', 'human', 'replace'],
            response: "> We do not replace engineers; we unleash them. Agents handle repetitive calculation, allowing humans to focus on creative design. <<OPEN:manifesto.html>>"
        },

        // DEMO & APP
        {
            keywords: ['demo', 'try', 'app', 'sandbox', 'test', 'see'],
            response: "> You can access the scaled-down version of our engine here: <a href='https://app.bloomcorelabs.com' target='_blank' style='color:#FFD700'>app.bloomcorelabs.com</a>"
        },

        // NAVIGATION / GENERIC
        {
            keywords: ['job', 'career', 'hiring', 'work', 'apply'],
            response: "> We are looking for Polymaths, AI Engineers, and Eurocode Experts. <<OPEN:careers.html>>"
        },
        {
            keywords: ['contact', 'email', 'reach', 'address', 'helsinki'],
            response: "> We are located at the University of Helsinki Innovation Hub. Email: kwabena@bloomcorelabs.com <<OPEN:contact.html>>"
        }
    ];

    // =================================================================
    // STYLING
    // =================================================================
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        #bc-chat-launcher { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #FFD700; border-radius: 50%; cursor: pointer; box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); display: none; align-items: center; justify-content: center; z-index: 9999; border: 2px solid #fff; transition: transform 0.3s; }
        #bc-chat-launcher:hover { transform: scale(1.1); }
        #bc-chat-window { position: fixed; bottom: 40px; right: 40px; width: 450px; height: 600px; background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(10px); border: 2px solid #FFD700; box-shadow: 0 20px 50px rgba(0,0,0,0.9); border-radius: 12px; display: none; flex-direction: column; z-index: 9999; font-family: 'JetBrains Mono', monospace; overflow: hidden; animation: slideUp 0.5s ease-out; }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .bc-chat-header { background: #FFD700; padding: 15px; display: flex; justify-content: space-between; align-items: center; color: #000; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; }
        .bc-status-dot { width: 8px; height: 8px; background-color: #000; border-radius: 50%; display: inline-block; margin-right: 8px; animation: pulse 2s infinite; }
        .bc-close-btn { cursor: pointer; font-size: 1.5rem; line-height: 1; }
        #bc-chat-history { flex: 1; padding: 20px; overflow-y: auto; }
        .bc-message { margin-bottom: 15px; padding: 12px; border-radius: 6px; font-size: 0.9rem; line-height: 1.5; max-width: 90%; word-wrap: break-word;}
        .bc-agent { background: #1a1a1a; border-left: 3px solid #00E676; color: #e0e0e0; align-self: flex-start; }
        .bc-user { background: rgba(255, 215, 0, 0.15); border: 1px solid rgba(255, 215, 0, 0.3); color: #FFD700; margin-left: auto; text-align: right; }
        .bc-input-area { padding: 15px; background: #000; border-top: 1px solid #333; display: flex; gap: 10px; }
        #bc-chat-input { flex: 1; background: #111; border: 1px solid #333; color: white; padding: 12px; font-family: 'JetBrains Mono', monospace; border-radius: 4px; outline: none; }
        #bc-chat-input:focus { border-color: #FFD700; }
        #bc-send-btn { background: #FFD700; color: black; border: none; padding: 0 20px; font-weight: bold; cursor: pointer; border-radius: 4px; }
        .bc-action-btn { display: inline-block; margin-top: 10px; padding: 8px 14px; background: #FFD700; color: black; border: none; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.75rem; cursor: pointer; text-transform: uppercase; border-radius: 4px; }
        @media (max-width: 480px) { #bc-chat-window { bottom: 0; right: 0; width: 100%; height: 60vh; border-radius: 20px 20px 0 0; } }
        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
    `;
    document.head.appendChild(style);

    const widgetHTML = `
        <div id="bc-chat-launcher"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg></div>
        <div id="bc-chat-window">
            <div class="bc-chat-header"><div id="bc-header-title"><span class="bc-status-dot"></span>SEBASTIAN // INITIALIZING</div><div class="bc-close-btn">−</div></div>
            <div id="bc-chat-history"></div>
            <div class="bc-input-area"><input type="text" id="bc-chat-input" placeholder="Ask Sebastian..." autocomplete="off"><button id="bc-send-btn">SEND</button></div>
        </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = widgetHTML;
    document.body.appendChild(wrapper);

    const launcher = document.getElementById('bc-chat-launcher');
    const windowEl = document.getElementById('bc-chat-window');
    const headerTitle = document.getElementById('bc-header-title');
    const closeBtn = document.querySelector('.bc-close-btn');
    const historyEl = document.getElementById('bc-chat-history');
    const inputEl = document.getElementById('bc-chat-input');
    const sendBtn = document.getElementById('bc-send-btn');

    let chatHistory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // AUTO-OPEN
    launcher.style.display = 'none';
    setTimeout(() => { 
        windowEl.style.display = 'flex'; historyEl.scrollTop = historyEl.scrollHeight; 
        headerTitle.innerHTML = GEMINI_API_KEY ? 
            '<span class="bc-status-dot" style="background-color:#00E676; box-shadow:0 0 5px #00E676;"></span>SEBASTIAN // ONLINE' : 
            '<span class="bc-status-dot" style="background-color:#FF3333; box-shadow:0 0 5px #FF3333;"></span>SEBASTIAN // OFFLINE';
    }, 4500);

    renderHistory();

    function renderHistory() {
        historyEl.innerHTML = '';
        if (chatHistory.length === 0) {
            addMessageToUI("agent", "> CONNECTION ESTABLISHED.<br>> Hello. I am Sebastian.<br>> I am synced across the site.");
        } else {
            chatHistory.forEach(msg => addMessageToUI(msg.sender, msg.text, false));
        }
    }

    function addMessageToUI(sender, text, save = true) {
        const navMatch = text.match(/<<OPEN:(.*?)>>/);
        let navButtonHTML = '';
        if (navMatch) {
            const targetPage = navMatch[1]; text = text.replace(navMatch[0], ''); 
            navButtonHTML = `<button class="bc-action-btn" onclick="window.location.href='${targetPage}'">ACCESS PAGE ➜</button>`;
        }
        const div = document.createElement('div'); div.className = `bc-message bc-${sender}`; div.innerHTML = text + navButtonHTML;
        historyEl.appendChild(div); historyEl.scrollTop = historyEl.scrollHeight;
        if (save) { chatHistory.push({ sender, text }); localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory)); }
    }

    launcher.addEventListener('click', () => { windowEl.style.display = 'flex'; launcher.style.display = 'none'; });
    closeBtn.addEventListener('click', () => { windowEl.style.display = 'none'; launcher.style.display = 'flex'; });

    async function handleSend() {
        const text = inputEl.value.trim();
        if (!text) return;
        addMessageToUI('user', text);
        inputEl.value = '';
        const loadingDiv = document.createElement('div'); loadingDiv.className = 'bc-message bc-agent'; loadingDiv.innerText = '> Thinking...'; loadingDiv.id = 'bc-loading'; historyEl.appendChild(loadingDiv); historyEl.scrollTop = historyEl.scrollHeight;

        let response = "";
        if (GEMINI_API_KEY) {
            try {
                const recentHistory = chatHistory.slice(-10).map(msg => ({ role: msg.sender === 'user' ? 'user' : 'model', parts: [{ text: msg.text }] }));
                const payload = { system_instruction: { parts: [{ text: systemPrompt }] }, contents: [...recentHistory, { role: "user", parts: [{ text: text }] }] };
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
                const apiRes = await fetch(apiUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
                const data = await apiRes.json();
                if (data.candidates && data.candidates[0].content) {
                    response = data.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
                } else { throw new Error("API Error"); }
            } catch (e) { response = generateSmartFallback(text); }
        } else {
            await new Promise(r => setTimeout(r, 800)); response = generateSmartFallback(text);
        }
        document.getElementById('bc-loading').remove(); addMessageToUI('agent', response);
    }

    // =================================================================
    // 3. SMART FALLBACK LOGIC
    // =================================================================
    function generateSmartFallback(input) {
        const lowerInput = input.toLowerCase();
        
        // Loop through the database to find a match
        for (const entry of FALLBACK_DB) {
            if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
                return entry.response;
            }
        }

        // Default if no keywords match
        return "> Input received. I am in Offline Mode.<br>> I can assist with: Technology, Team, Manifesto, or Careers.<br>> Please refine your query.";
    }

    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
})();
