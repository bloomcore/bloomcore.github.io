# Technology Page — Card Image Prompts

Image-generation prompts for the six capability cards on `technology.html`.
Generated with **GPT-5.4 image generation**. Each card follows a shared
minimal visual template with a single-use color accent per card.

## Shared template

- **Aspect ratio:** 16:9
- **Background:** deep charcoal fading to near-black at edges, soft vignette
- **Subject:** three-quarter isometric two-storey wireframe portal frame —
  four corner columns, two horizontal floor slab outlines, a roof slab,
  diagonal bracing on one bay. No additional beams, no staircases, no
  interior details.
- **Line weight:** 15 pixels for the frame (bold, sculptural — unmissable
  at small sizes)
- **Accent line weight:** 20 pixels for the single-use accent element
  (thicker than the frame so the accent reads as the focal point)
- **Accent brightness:** brighter, more vivid than "restrained" — it must
  pop against the off-white frame without looking neon
- **Frame size:** occupies ~60–70% of image, centered
- **Film grain:** subtle but present throughout
- **No text, no labels, no callouts, no corner labels.**
- **Accent discipline:** single color used only once per image. Gold
  (#FFD700) for analytical / force / primary signals. Green (#00E676) for
  verified / compliant signals — reserved for card 4 only.

## Card 1 — Automated 3D Geometry

File: `geometry.png`
Accent: warm gold on the front-left corner column.

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The central subject is a minimal three-quarter isometric wireframe of a
simple two-storey structural frame — just four corner columns, two
horizontal floor slab outlines, a roof slab, and diagonal bracing on one
bay. That is all. No additional beams between, no staircases, no interior
details. Rendered in crisp off-white vectors with a thick, bold 15-pixel
line weight — the frame must look almost sculptural, unmissable even at
small display sizes. The frame occupies roughly 60–70% of the image,
centered, as the dominant visual element.

The subject of this image is automated 3D geometry — the extraction of a
structural frame from an architect's model. To signal this, one of the
four outer corner columns is rendered in a bright, vivid warm gold color
at a thicker 20-pixel line weight — specifically the front-left corner
column (the one closest to the viewer on the left side of the isometric
view), running cleanly from the foundation up to the roof slab. Gold is
used only once, only on this single corner column. It must be clearly
one of the four outer columns at a visible corner of the frame — not an
interior line, not a diagonal, not a center element. The other three
corner columns and all other structural lines stay soft off-white at the
15-pixel frame line weight.

No text, no labels, no callouts, no corner text of any kind.

Avoid: gold lines through the interior of the frame, gold on diagonals
or braces, gold anywhere other than on one outer corner column, detailed
floor plans, multiple storeys beyond two, people, construction sites,
colored backgrounds, cartoon rendering, callout boxes, neon, cyan,
gradient halos, decorative elements. The frame must fill the canvas with
confidence and the gold accent must sit unambiguously on one of the
outer corners.

Mood: restrained, iconic, cinematic. Heavy line weight, single corner
column in gold, otherwise pure wireframe.
```

## Card 2 — Load Analysis

File: `load.png`
Accent: warm gold on a single horizontal wind arrow from outside the
frame on the left.

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The central subject is a minimal three-quarter isometric wireframe of a
simple two-storey structural frame — just four corner columns, two
horizontal floor slab outlines, a roof slab, and diagonal bracing on one
bay. That is all. No additional beams between, no staircases, no interior
details. Rendered in crisp off-white vectors with a thick, bold 15-pixel
line weight — the frame must look almost sculptural, unmissable even at
small display sizes. The frame occupies roughly 60–70% of the image,
centered, as the dominant visual element.

The subject of this image is load analysis. Overlay two types of load
indicators onto the wireframe:
1. Above the roof slab, a cluster of about four parallel vertical arrows
   pointing downward onto the structure, representing gravity and snow
   loads. Arrows rendered in the same soft off-white as the frame and at
   the same 15-pixel line weight — they must read as bold as the
   structural lines, not thinner. Small crisp arrowheads.
2. From outside the left edge of the frame, a single prominent horizontal
   arrow in a warm restrained gold color pointing inward toward the roof
   corner, representing wind load. Rendered at the same 15-pixel line
   weight as the frame. Gold is used only once, only for this wind arrow
   — nowhere else in the image.

The wind arrow must clearly originate outside the frame on the left side,
not from within the structure.

No text, no labels, no callouts, no corner text of any kind.

Avoid: numeric values, arrows drawn on the ground or on the sides of the
building, gold anywhere other than the single wind arrow, people,
construction sites, colored backgrounds, cartoon rendering, callout
boxes, badges, neon, cyan, gradient halos, decorative elements.

Mood: restrained, iconic, cinematic. Everything is bold, the frame and
overlays speak with confidence at any display size.
```

## Card 3 — Finite Element Analysis

File: `fea.png`
Accent: bright warm gold on the mid-span front edge of the upper floor
slab, drawn as a gentle downward arc (deflection under load).

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The central subject is a minimal three-quarter isometric wireframe of a
simple two-storey structural frame — just four corner columns, two
horizontal floor slab outlines, a roof slab, and diagonal bracing on one
bay. That is all. No additional beams between, no staircases, no interior
details. Rendered in crisp off-white vectors with a thick, bold 15-pixel
line weight — the frame must look almost sculptural, unmissable even at
small display sizes. The frame occupies roughly 60–70% of the image,
centered, as the dominant visual element.

The subject of this image is finite element analysis — the moment where
the simulation identifies one element flexing under load. To signal this,
the mid-span of one horizontal floor slab edge (the front-facing edge of
the upper floor slab, the one most visible to the viewer) is rendered in
a bright, vivid warm gold color at a thicker 20-pixel line weight — and
drawn as a gentle downward arc rather than a straight line. The curve
should be visible but not exaggerated: just enough to read as a bending
element among its otherwise rigid siblings. Gold is used only once, only
on this deflecting slab edge. All other structural lines stay soft
off-white at the 15-pixel frame weight and perfectly straight.

No text, no labels, no callouts, no corner text of any kind.

Avoid: colored heatmap gradients (red-yellow-green FEA rainbows), gold on
the vertical columns, gold on diagonals or braces, gold on multiple
elements, detailed floor plans, multiple storeys beyond two, people,
construction sites, colored backgrounds, cartoon rendering, callout
boxes, neon, cyan, gradient halos, decorative elements.

Mood: restrained, iconic, cinematic. The viewer must read "one beam is
flexing under analysis" at a glance — a single moment of motion against
an otherwise rigid frame.
```

## Card 4 — Eurocode Compliance

File: `compliance.png`
Accent: bright signal-green on the single diagonal brace (the only card
that uses green — reserved for the verified / compliant signal).

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The central subject is a minimal three-quarter isometric wireframe of a
simple two-storey structural frame — just four corner columns, two
horizontal floor slab outlines, a roof slab, and diagonal bracing on one
bay. That is all. No additional beams between, no staircases, no interior
details. Rendered in crisp off-white vectors with a thick, bold 15-pixel
line weight — the frame must look almost sculptural, unmissable even at
small display sizes. The frame occupies roughly 60–70% of the image,
centered, as the dominant visual element.

The subject of this image is Eurocode compliance — the moment where one
element has been verified as code-compliant. To signal this, the diagonal
brace on the braced bay is rendered in a bright, vivid green color at a
thicker 20-pixel line weight — a clean cold signal-green, not olive, not
forest, not neon-glowing. Crisp and confident. Green is used only once,
only on this single diagonal brace — not on columns, not on slabs, not
anywhere else in the image. All other structural lines stay soft
off-white at the 15-pixel frame weight.

No text, no labels, no callouts, no check marks, no badges, no corner
text of any kind.

Avoid: neon or glowing green, yellow-green or olive shades, green on
multiple elements, green on columns or slabs, additional storeys beyond
two, people, construction sites, colored backgrounds, cartoon rendering,
callout boxes, gradient halos, decorative elements.

Mood: restrained, iconic, cinematic. The diagonal brace should read as
"verified / compliant" at a glance — one element, one bright color,
quiet authority.
```

## Card 5 — Design Optimization

File: `optimization.png`
Accent: bright warm gold on the front-right corner column, drawn as a
tapered shape with a visible section change partway up its length.

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The central subject is a minimal three-quarter isometric wireframe of a
simple two-storey structural frame — just four corner columns, two
horizontal floor slab outlines, a roof slab, and diagonal bracing on one
bay. That is all. No additional beams between, no staircases, no interior
details. Rendered in crisp off-white vectors with a thick, bold 15-pixel
line weight — the frame must look almost sculptural, unmissable even at
small display sizes. The frame occupies roughly 60–70% of the image,
centered, as the dominant visual element.

The subject of this image is design optimization — the moment where one
column's cross-section has been resized to a lighter profile. To signal
this, one vertical outer corner column — specifically the front-right
corner column (the one closest to the viewer on the right side of the
isometric view) — is rendered in a bright, vivid warm gold color at a
thicker 20-pixel line weight as a tapered shape: visibly broader at the
base (a small rectangular outline) and narrowing to a slimmer section
near the top, with a clear visible step partway up where the section
changes. Two section widths joined by a distinct step, showing that the
optimizer reduced material in the upper, lower-loaded portion. The
entire tapered column is in gold. All other structural lines stay soft
off-white at the 15-pixel frame weight, straight and uniform.

Gold is used only once, only on this tapered corner column — nowhere
else in the image. It must clearly sit on an outer corner, not in the
interior of the frame.

No text, no labels, no callouts, no corner text of any kind.

Avoid: filled solid shapes (keep the tapered column as outline/wireframe,
not a filled rectangle), gold on multiple columns, gold on diagonals or
slabs, interior details beyond the one tapered corner column, multiple
storeys beyond two, people, construction sites, colored backgrounds,
cartoon rendering, callout boxes, percentage labels, weight numbers,
arrows, neon, cyan, gradient halos, decorative elements.

Mood: restrained, iconic, cinematic. The tapered corner column should
read as "this member has been optimized" at a glance — the only element
in the frame that differs in section along its length.
```

## Card 6 — Calculation Reports

File: `document.png`
Accent: bright warm gold on the stylized calculation-report page sitting
beside the structural frame. The only card in the set with two subjects
(frame + document) rather than a single centered anchor.

```
Create a 16:9 dark cinematic engineering render. Deep charcoal background
fading to near-black at the edges like a soft vignette. Subtle film grain
throughout.

The composition has two subjects, sitting side by side in the same
three-quarter isometric perspective:

On the left, a minimal three-quarter isometric wireframe of a simple
two-storey structural frame — just four corner columns, two horizontal
floor slab outlines, a roof slab, and diagonal bracing on one bay. That
is all. No additional beams between, no staircases, no interior details.
Rendered in crisp off-white vectors with a bold 15-pixel line weight.
Occupies roughly the left 40% of the image.

On the right, slightly smaller than the frame, a stylized calculation
report: a simple rectangular page outline at the same three-quarter
isometric angle as the frame — portrait orientation, like a sheet of
paper tilted in space. Inside the page, three to four short horizontal
line segments represent content rows (section headings and numbers).
Across the top of the page, a slightly bolder horizontal bar suggests a
header stripe. The entire document — outline, content lines, and header
bar — is rendered in a bright, vivid warm gold color at a thicker
20-pixel line weight for the page outline and header bar, and matching
weight for the content lines so they remain readable at small display
size. Gold is used only on this document, nowhere else in the image.

No faint connecting line between frame and document — keep the
composition clean with two clear subjects and negative space between
them.

No text, no labels, no callouts, no real letterforms, no numbers. The
placeholder lines inside the document must read as abstract tick marks,
not actual text.

Avoid: actual readable letters or numbers on the document, multiple
pages or a fanned stack (single page only), signatures or stamps, filled
shapes (keep everything as outline/wireframe), gold accents inside the
structural frame itself, colored backgrounds, cartoon rendering, callout
boxes, neon, cyan, gradient halos, sky, trees, decorative elements.

Mood: restrained, iconic, cinematic. The image reads "structure → report"
at a glance — two objects sharing a perspective, the document
unmistakably the authoritative output.
```
