# Mood images

Drop 4 square photos per style into its folder, named `1.jpg` `2.jpg` `3.jpg` `4.jpg`:

```
public/mood-images/minimal/1.jpg
public/mood-images/minimal/2.jpg
public/mood-images/minimal/3.jpg
public/mood-images/minimal/4.jpg
public/mood-images/streetwear/1.jpg
...
```

Folders (one per style, matching each style's `key` in `src/data/styleQuizData.js`):

- `minimal`
- `streetwear`
- `oldMoney`
- `koreanCasual`
- `smartCasual`
- `vintage`

The 4 slots per style correspond to the mood items already defined for that
style in `styleQuizData.js` (e.g. Minimal's are: wooden table, glass of
water, two books, white linen fabric) — so pick photos that match those
themes, in order.

No code changes needed — once a file exists at the expected path it appears
automatically, both in the app (polaroid photo cards) and in the downloadable
Style Card. Until a photo is added, that slot shows its emoji instead.

Recommended: square images (1:1), at least 600×600px, JPG or PNG.
