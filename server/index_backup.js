const express = require('express');
const path = require('path');
const fs = require('fs');
const ServerLocation = require('@reach/router').ServerLocation;
const react = require('react');
const renderToString = require('react-dom/server').renderToString;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const html = fs.readFileSync('./public/index.html').toString();
const parts = html.split("mytidbit");

//app.set('view engine', 'ejs');

app.use((req,res, next)=>{
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    )

    res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    res.end();
})

// app.use((req, res, next) => {
//     res.header("Access-control-allow-origin", "*");
//     next()
// });

// app.get('/', (req, res) => {
//     res.render('home')
// });

app.get('/', (req, res) => {
    res.json({ "data": "lasagna" })
});

app.listen(3000, () => {
    console.log("listening on 3k....")
});