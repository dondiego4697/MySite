/**
 * Created by Denis on 24.03.2017.
 */
'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.use('/vendor', express.static('vendor'));
app.use('/pages', express.static('pages'));

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});