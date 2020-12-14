## Course Requirements

1. Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.
    -  Can be found on line 58 in the Amiibo.js file.

2. Encapsulate your code as React functional components.
    - All the components are used as a functional component. No class components are used.

3. Work with command-line tools and NPM to create and manage your project within a real development toolset.
    - NPM was used to create the project and the CLI was used.

4. Allow communication between components using props and the Context API.
    - I have 2 contexts in the contexts folder named AmiiboContext.js and SignupFormContext.js. Both can be found throughout the app seeing that they are present in the in App.js.

5. Present a form for user input that provides useful form validation and feedback.
    - The form is found in the Signup.js file in the components folder. There I use yup and Formik to create form validation for the user to signup. When the user has done so they are navigated to the main page. Feedback can be found starting on line 41.

6. Create at least 5 custom components and use it within at least two of your other components.
    - I have created 5 components in the componets folder. The Hero and Header component are bing used in the App.js file and the other components are being used as routes to naviagte to.

7. Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
    - I did not use any animations or transitions in this project but I did add a loading bar that loads only while the data is being fetched from the server. You can see the red bar loading underneath the hero image on the app.
    - Line 92 of Amiibo.js has the LinearProgress component being used from material-ui.

8. Connect to a server using HTTP and display retrieved data.
    - I am connecting to the server using axios in the AmiiboContext.js. There I connect to the server using a get request from axios and then sending the data retrieved throughout the app using the context api.

9. Provide at least 3 different routes with navigation between them using React Router.
    - The routes can be found in the App.js file. Three routes are found navigating to Login, Signup, and Amiibo components.

10. Manage your application's state using Hooks and the Context API.
    - I have 2 contexts to be found in the contexts folder which allows that data to be accessed throughout the app. You can see an example of the useState, useEffect, and the useContext Hooks in the AmiiboContext.js file.

11. Structure, document, and deploy your final project code according to common industry practices.
    - The code was deployed on Netlify using the build command and is deployed via the public folder. 