// require your server and launch it here
const express = require('express');

const server = require('./api/server') 

const port = 5000

server.listen(port, () => {
    console.log('listening on ', port) 
})