#!/usr/bin/env node

const { readFile } = require('fs');
const { join } = require('path');

readFile(join(__dirname, './info.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});