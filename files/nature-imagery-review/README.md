# Alexis Lyon — AI Nature Imagery Review Set

## Direction

Rich, calming, photorealistic nature imagery aligned to the live site palette:

- Forest `#1B4A3A`
- Sage `#4A7C59` / `#8AAF94`
- Cream `#F7F3ED`
- Restrained gold `#C8922A`

Mood: serenity, safety, awe, groundedness, movement, and nature as co-regulator. No people, text, logos, purple sunsets, harsh contrast, or generic wellness-stock styling.

## Exact 50% Alexis-Image Reduction

The current site renders Alexis in 12 meaningful photo placements. The proposed change keeps six and replaces six.

### Keep Alexis — trust and relationship anchors (6)

1. Homepage About story portrait
2. `/about` primary portrait
3. `/connect` portrait
4. Philosophy relationship card — Witnessing
5. Philosophy relationship card — Practicing Presence
6. Philosophy relationship card — Returning to Truth

### Replace with AI nature imagery (6)

1. Homepage You Belong Here — Tender → **02 Fern + Dew**
2. Homepage You Belong Here — Wildness → **03 Waterfall**
3. Philosophy Foundation — Safety → **04 Grounded Roots**
4. Philosophy Foundation — Regulation → **05 Stream**
5. Philosophy Foundation — Psychological Flexibility → **06 Open Path**
6. Philosophy relationship card — Co-regulating → **07 Two Trees**

## Additional Nature Placements

These do not replace Alexis; they make the nature direction feel intentional across the site:

1. Homepage hero background → **01 Misty Canopy**
2. Homepage Wound card → **08 Still Pool**
3. Homepage Wildness card → **09 Pacific Ocean**
4. Post-Traumatic Growth article hero/card → **10 New Growth**
5. Psychological Flexibility article hero/card → **11 Sunrise / Open Horizon**

## Technical Plan After Approval

- Use the optimized WebP files in this folder.
- Render with `next/image` and descriptive alt text.
- Hero loads with `priority`; below-fold imagery remains lazy-loaded.
- Preserve current text contrast with forest overlays/gradients.
- Verify desktop and 390px mobile crops, image natural dimensions, console, overflow, production build, and Lighthouse performance.
- Stage on an immutable Preview first. Production remains unchanged until Stephen approves release.

## Review

Approve the set as-is, or identify any image numbers to regenerate before implementation.
