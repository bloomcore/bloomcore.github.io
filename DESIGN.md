# Bloomcore Labs — Visual Identity

Derived from `styles.css`. Source of truth for any composition in this project.

## Style Prompt

Dark, cinematic, technical. Engineering-grade precision with a confident editorial feel — the brand of a structural analysis platform for serious practitioners. Deep blacks, a single warm gold accent for authority, a cold green accent for verified/compliant signals. Inter for presence, JetBrains Mono for instrumentation. Motion is deliberate, never bouncy.

## Colors

- `#000000` — background (canvas)
- `#0a0a0a` — near-black surface tint (avoid pure `#000` for large areas adjacent to text)
- `#FFD700` — brand gold, headline + primary accent
- `#00E676` — brand green, status/compliance/verified accent (use sparingly)
- `#FFFFFF` — foreground text
- `#B0B0B0` — secondary text / instrument labels

## Typography

- `Inter` — headlines (700–800) and body (400)
- `JetBrains Mono` — eyebrow labels, corner instruments, tags (uppercase, 0.25–0.35em tracking)

## Motion

- Easing: `expo.out` for headline entrance, `power3.out` for supporting text, `power2.inOut` for accent lines, `power2.in` only on final fade.
- Offset first tween 0.2–0.5s (never t=0).
- Entrance transforms combine `y` + `opacity`. No bounces, no elastic.

## What NOT to Do

- No cyan, no purple-to-blue gradients, no neon — this is an engineering brand, not a gaming one.
- No gradient-text on the headline — the gold is bold enough solid.
- No bouncy/elastic easing.
- No pure `#000` adjacent to gold text without a subtle tint or glow buffer.
- No centered layout for the headline — lead the eye from the left margin.
