/**
 * Created by Denis on 24.03.2017.
 */
'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use('/', express.static('pages'));
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.use('/pages', express.static('pages'));
app.use('/vendor', express.static('vendor'));
app.use('/fonts', express.static('dist/fonts'));

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});