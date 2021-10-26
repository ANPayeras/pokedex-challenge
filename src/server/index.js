/* import express from 'express';
import path from 'path';
import React from 'react'
import ReactDom from 'react-dom/server';

import App from '../App';
import PokedexState from '../context/useState';

import StyleContext from 'isomorphic-style-loader/StyleContext'

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/ssr', async (req, res) => {
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

    const root = (
        <html>
            <head>
                <style>${[...css].join('')}</style>
            </head>
            <body>
                <div id="root">
                    <StyleContext.Provider value={{ insertCss }}>
                        <PokedexState>
                            <App />
                        </PokedexState>
                    </StyleContext.Provider>
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