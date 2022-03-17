import express from 'express';
import path from 'path';
import React from 'react'
import ReactDom from 'react-dom/server';

import App from '../App';
import PokedexState from '../context/useState';

const app = express();
/*  */
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
const PORT = process.env.PORT || 3000;
/*  */

/* app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/ssr', async (req, res) => {

    const root = (
        <html>
            <body>
                <div id="root">
                    <PokedexState>
                        <App />
                    </PokedexState>
                </div>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
}); */

/*  */
app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(
        <PokedexState>
            <App />
        </PokedexState>
    );
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});