const express = require('express');
const path = require('path');
const fs = require('fs');
const ServerLocation = require('@reach/router').ServerLocation;
const App = require('./App').App;
const React = require('react');
const { renderToNodeStream } = require('react-dom/server');
//const renderToString = require('react-dom/server').renderToString;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const html = fs.readFileSync('./public/index.html').toString();
const parts = html.split("<!--mytidbit-->");

//app.set('view engine', 'ejs');

app.use((req,res, next)=>{

    res.write(parts[0]);

    const reactMarkup = (
        <ServerLocation url={req.url}>
            `<App />`
        </ServerLocation>
    );

    const stream = renderToNodeStream(reactMarkup);

    stream.pipe(res, {end: false});

    stream.on('end', ()=>{
        res.write(parts[1]);
        res.end();
    })

    // res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    // res.end();
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