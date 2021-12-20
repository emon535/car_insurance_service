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

## What can be improved :

- Write tests , tests and tests.
- Make a list component to load all the make, model and vehicles list to get rid of repetative code.
- Write tests for the services and redux sagas.
- Improve the design
- Handle errors, failes and try catch notifications.
- Code Cleanup and delete unused codes.
- Using linting and prettier properly .

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Author

👤 **Foysal Ahmed Emon**

- Linkedin: [@emon535](https://www.linkedin.com/in/emon535/)
- Github: [@emon535](https://github.com/emon535/)
