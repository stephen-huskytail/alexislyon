# Alexis Lyon — AI Nature Imagery Review Set

## Direction

Rich, calming, photorealistic nature imagery aligned to the live site palette:

- Forest `#1B4A3A`
- Sage `#4A7C59` / `#8AAF94`
- Cream `#F7F3ED`
- Restrained gold `#C8922A`

Mood: serenity, safety, awe, groundedness, movement, and nature as co-regulator. No people, text, logos, purple sunsets, harsh contrast, or generic wellness-stock styling.

## Alexis Image Balance

The current site renders Alexis in 12 meaningful photo placements. Per Stephen’s updated direction, the implementation replaces only two and keeps the remaining ten.

### Keep Alexis — trust and relationship anchors (10)

- Homepage About story portrait
- `/about` primary portrait
- `/connect` portrait
- All three Philosophy Foundation cards
- All four Philosophy relationship cards

### Replace with AI nature imagery (2)

1. Homepage You Belong Here — Tender → **02 Fern + Dew**
2. Homepage You Belong Here — Wildness → **03 Waterfall**

## Additional Nature Placements

These do not replace Alexis; they make the nature direction feel intentional across the site:

1. Homepage hero background → **01 Misty Canopy**
2. Homepage Wound card → **08 Still Pool**
3. Homepage Wildness card → **09 Pacific Ocean**
4. Philosophy hero panel → **06 Open Path**
5. Post-Traumatic Growth article hero/card → **10 New Growth**
6. Psychological Flexibility article hero/card → **11 Sunrise / Open Horizon**

## Technical Implementation

- Use the optimized WebP files in this folder.
- Render with `next/image` and descriptive alt text.
- Hero loads with `priority`; below-fold imagery remains lazy-loaded.
- Preserve current text contrast with forest overlays/gradients.
- Verify desktop and 390px mobile crops, image natural dimensions, console, overflow, production build, and Lighthouse performance.
- Stage on an immutable Preview first. Production remains unchanged until Stephen approves release.

## Release State

Implementation is staged on the review branch. Production remains unchanged until Stephen approves release.
