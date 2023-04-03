# React BoilerPlate

Creating a react template without using create-react-app

PS - This has been done using the latest version of React - version 18.

- Steps
* Create _package.json_ file
```
npm init -y
```

* Install dependency packages _react_, _react-dom_, _react-scripts_
```
npm install --save-dev react react-dom react-scripts
```

* Create **public** folder and add an _index.html_ file
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Boiler Plate</title>
</head>

<body>
    <div id="reactApp"></div>
</body>

</html>
```

* Create **src** folder and add three files, _App.js_, _App.css_ and _index.js_
- App.js
```javascript
import "./App.css"

const App = () => {
    return(
        <h1>This is my boiler plate template</h1>
    );
};

export default App;
```

- index.js
```javascript
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// new syntax for React18
ReactDOM.createRoot(
    document.querySelector('#reactApp'),
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>   
);
```

* Update the _package.json_ file and update the following parameters
-for the "main" attribute, point the value to the _index.js_ file inside **src** by referencing ./index.js
```json
    "main": "./index.js",
```
- for the "scripts" attribute, add the following two lines underneath "test"
```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "react-scripts start",
        "build": "react-scripts build"
    },
```

Save and run using npm start in your root folder. Accept any prompts that will come up during execution