# Brewing Salt Calculator

This tool is built for calculating the optimal mineral additions for brewing
water. Calculating salt additions is difficult, because brewing water
profiles need to balance 6 different ions (calcium, magnesium, sodium,
sulfate, chloride, and bicarbonate). The difficulty is that each of the
minerals that a brewer might add to their water (e.g. Epsom salts, canning
salt, gypsum, etc) adjusts *more than one ion* at once.

This makes optimising water profiles a delicate balancing act - adding too
much of one salt to correct one ion will throw off the balance for another.
This tool uses a mathematical optimisation technique to determine the *best
possible* combination of salts to add to your water to suit your beer
profile.

This is specifically aimed at making water chemistry adjustments easier for
homebrewers and non-experts alike (I firmly consider myself a non-expert).
However, this tool might be useful in a professional brewing scenario too.

A live version of this tool can be found at
[charlienewey.github.io/brewing-salt-calculator][live-mode].

## Scripts for Developers

If you aren't a developer of this tool, then the section below probably won't
interest you. Check out the [live version][live-mode] instead.

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000][dev-mode]\
to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in\
the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles\
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

Saves a productionised build of the app into the `gh-pages` branch of this\
repository. Can be used for publishing on GitHub pages.

[dev-mode]: http://localhost:3000/
[live-mode]: https://charlienewey.github.io/brewing-salt-calculator