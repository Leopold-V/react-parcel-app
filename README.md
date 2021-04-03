# A simple and easily configurable React boilerplate.

I decided to speed up my workflow process when i want to get fast into the code part for small app or prototypes using React.js so i created this thing.
Feel free to share it and give feedback.

Parcel was ideal for me because it includes some important features :
- Fast config.
- Hot Module Replacement.
- Node Emulation for .env files.
- Postcss and sass support.
And a lot more, checkout the new version documentation : https://v2.parceljs.org/

## Include :
- React.js
- Tests with Jest and testing-library
- normalize.css to reset the style
- css autoprefixer
- Prettier
Standard React libraries :
- react-router-dom
- prop-types
- styled-components

I use the **parcel V2 version** so some bugs might be related to the new beta version.

## Usage :

`npm start`
Starts up the development server on http://localhost:3000

`npm build`
Creates a production-ready bundles with a /build folder

`npm test`
Launch tests with Jest

`npm prettify`
Clean up ALL your files **located at /src/** with prettify (feel free to modify the prettier config and the scope of the script.)
