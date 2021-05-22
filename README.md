# Create a React with Parcel app.

Simple React boilerplate taking advantages of Parcel strengths.
Include some commons packages use for React.js developement.

## Features

- Parcel `v2` (run and build your code, bundles size analyze, compiler, instant feedback, etc. see : https://v2.parceljs.org/).
- React.js `v17`
- Commons React libraries (react-router-dom, prop-types, styled-components)
- CSS flexibility (Reset + Normalize.css, autoprefixer, use css, sass or styled-components).
- babel
- prettier
- Tests (Jest with testing-library)
- Very basic folders structure bootstrapped.

## Getting started

Chose a folder and create your application :

```bash
npx react-parcel-app app-name
```

Starts up the development server on http://localhost:3000 :

```bash
npm start
```

Creates a production-ready bundles with a /build folder :

```bash
npm run build
```

**You can find an analyze of your bundles size in ./parcel-bundle-reports**.

Clean up ALL your files **located at /src/** with prettify (feel free to modify the prettier config and the scope of the script) :

```bash
npm run prettify
```

### Tests

Tests are located in `./src/__tests__` .
They are written with Jest and testing-library.
You can change the config with the jest.config.js and setupTest.js files.

The current script command to launch tests is :

```bash
npm test
```

## Requirements : 

You need Node + npm and npx need npm 5.2+ and higher, those are the only requirements.

I use the **parcel V2 version** so some untracked bugs might be related to the new beta version.

Let me know if you encounter any problem as well as if you have feedbacks, you're welcome.
