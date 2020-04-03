const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Quotes'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Quotes/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// 1. create a server.js File
// 2.install express
// 3.
// copy these from devdependencies to dependeicis
// "@angular/cli": "~9.0.5",
// "@angular/compiler-cli": "~9.0.5",
//copy Typescript
// 4.
// "start": "node server.js",
    // "start:dev": "ng serve",
    // "postinstall": "ng build --aot --prod"