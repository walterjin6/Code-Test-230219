# Nested Menu And Login Form

The project aims to create a login page and a navigation header with nested menu, establish routing between pages. The project also includes a login form that enables the user to complete the login process.

The application is hosted [here](https://main.d2m7hc27mf8dls.amplifyapp.com/).

## Features

After the page is loaded, you can navigate the web pages by clicking the nested menu buttons on the navigation header bar.

Click the Login button, Login form will be displayed.  The login logic are as follows:

1. If username or password is wrong, "Wrong username or password" will be displayed.
2. If username is "admin" and password is "12345", "You are logged in!" will be displayed, and Login button on Navbar will be changed to "Welcome, admin!"
3. If username or password is not provided, "All fields are required" will be displayed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner and run all the tests.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Main Tech Stacks used

1. TypeScript: Programming Language
2. React: To construct UI components
3. React Router: To navigate between pages
4. Redux Toolkit: To share username info across components
5. TailwindCSS: To style the UI
6. Axios: To make HTTP requests
7. MSW (Mock Service Worker): To mock APIs and web requests.
8. Jest: To run tests and provide test coverage