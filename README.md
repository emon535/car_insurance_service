# FRIDAY - Car Insurance Service

## Setup in Local environment

1. Clone the repo from `https://github.com/emon535/car_insurance_service.git`
2. Change the directory : `cd car_insurance_service/`
3. install packages with "yarn"
4. start local server with : **yarn server**
5. start react app : **yarn start**
6. hit **http://localhost:3000** on the browser

## Local build setup guide

1. Clone the repo from `https://github.com/emon535/car_insurance_service.git`
2. Change the directory : `cd car_insurance_service/`
3. install dependencies: **yarn**
4. **npm install -g serve** or **yarn global add serve**
5. start local server with : **yarn server**
6. build app: **yarn build**
7. serve build locally: **serve -s build**
8. open **localhost:5000** in your browser(Google Chrome, Mozilla Firefox, Safari, Microsoft Edge)d

## Main Dependencies

- **react** - main library
- **react-scripts** - helps with project setup: development, builds, linters, scripts and etc.
- **@testing-library** - library for testing react component with jest
- **redux** - application state management
- **@reduxjs/toolkit** - usefull toolkit for better redux store setup and configuration(immer and etc.)
- **react-icons** - library with icon components for better UX
- **react-router** - routes control in application
- **redux-injectors** - component for virtualizing data(vehicles)
- **redux-saga** - Async request management
- **redux-toolkit** - Official React bindings for Redux
- **styled-components** - Wrap with styled to create custom elements.

## Folder Structure

============================

> Top Level folder structure :

    ├── apiserver               # Api server provided by FRIDAY.
    ├── node_modules            # All the node module packages
    ├── public                  # public resource folder where index.html is "root" id is used as parent div element.
    ├── src                     # All the source codes for application
    ├── .gitignore              # gitignore
    ├── package.json            # all dependencies list
    ├── yarn.lock               # information about the current versions of dependencies.
    └── README.md               # project documenation

> src file structure :

         ├── ...
    ├──── src                                       # Main source file
    │    ├── apis                                   # Api's for the application
    │    ├── components   │                         # Component folder where I kept all the components
    │    │                ├── Makes
    │    │                ├── Models
    │    │                ├── vehicles
    │    │                                          # script to run custom training on the biomedical data using spacy
    │    ├── configs                                # Application configuration
    │    ├── pages     ---│
    │    │                ├── Home
    │    │
    │    │
    │    │
    │    ├── services                                # api services and other services
    │    ├── store    ----│                          # Store management tools like redux, sagas and slices
    │    │                ├── slices
    │    │                ├── index.js
    │    │                ├── rootReducer.js
    │    │                ├── rootSaga.js            # Root Saga folder to export all the sagas
    │    ├── styles
    │    ├── utils                                   # All the utilities files like constants and other
    │    ├── index.css                               # css root file to reset or initiate all css
    │    ├── reportWebVitals.js
    │    ├── setupTests.js
    └── ...

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
