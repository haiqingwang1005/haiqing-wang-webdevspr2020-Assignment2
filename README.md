# haiqing-wang-webdevspr2020-Assignment2
Assignment2 for cs5610

1. Heroku deployment: https://haiqing-wang-webdevspr2020-hw2.herokuapp.com/home
2. Github repository: https://github.com/haiqingwang1005/haiqing-wang-webdevspr2020-hw2

#Features

My web app has the following features:

1. The “/home” page. A page consists of some pictures and a menu.
    
    * In the menu, user can select the difficulty for the game by clicking “Select Difficulty” button. 
     When user click it, a React Modal will pop up, and user can pick the difficulty level among “Very Easy”, “Easy”, “Average”, “Hard”, “Very Hard”.
     If user close or cancel the pop up, the chosen difficulty will be dismissed. 
     If user click “OK” on the pop up, the chosen difficulty will be recorded and shown on the left corner of the menu.

    * User can click the button “Learn more about rules” to launch a new page “/about” to get rule details about the game.

    * User can click the button “Start” to launch a new page “/play” to play the game. The default difficulty is “Very Easy”

2. The “/about” page. A page that shows the game rules details. User can back to the home page through the “Go Home” button.

3. The “/play” page. A page consists of three parts.
    * The first part is a list of the words to be guessed. The words length and amount are based on the difficulty the user chooses.

    * The second part is an area where user can input the guessed word. It also shows how many times are there left.

    * The third part is an area that shows a list of the users play history. The element in the list shows the word user 
    guessed and the correctness. If the user guesses the correct word, it will also render a reminder that user wins. 
    If the user cannot guess the correct word within 4 steps, it will render a reminder that user loses. When the game finishes, 
    the input area will be blocked and prevent further input.

4.	There are some UX improvement. The words dictionary files are stored in the public folder. 
Each time the “/play” page is reloaded, the app will load these files, which takes hundreds of milliseconds. 
The “/play” page will show a spinner before the data is fully loaded.


# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
