# Photograph credits

The photographs in `public/images/` are freely-licensed images from Wikimedia Commons,
used as **placeholders** until MRN Agro Industries supplies its own photography.
Their licences require attribution, which appears in the site footer.

| File | Used for | Photographer | Licence |
|---|---|---|---|
| `harvest-raichur.jpg` | Home hero, About story | Nanditha Gogate, WELL Labs | CC BY-SA 4.0 |
| `paddy-field.jpg` | About and Contact page banners | Juntora | CC BY-SA 4.0 |
| `farmers.jpg` | Home — about preview | McKay Savage | CC BY 2.0 |
| `hand-grain.jpg` | Home — direct sourcing | Erfanebrahimsait | CC BY-SA 4.0 |
| `rice-raw.jpg` | Products page banner | cookbookman17 | CC BY 2.0 |
| `rice-white.jpg` | About — our promise | Sum overseas | CC BY-SA 4.0 |

`public/images/CREDITS.json` holds the same data with the source page URLs.

## Replacing them

Photographs of the actual Raichur facility, the milling line and the team would serve the
site far better than any stock image. To swap one in:

1. Drop the new file into `public/images/`.
2. Update the matching entry in `lib/photos.js` (`src`, `alt`, `caption`).
3. Delete the `credit` value — once no borrowed photographs remain, remove the credit
   paragraph from `components/Footer.jsx` and delete this file.

## Note on licences

CC BY-SA 4.0 requires attribution **and** that adaptations be shared under the same licence.
That applies to the photographs, not to the website around them. Attribution must stay
visible for as long as these images are in use.
