const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const firstElement = require('./messageQueue');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
   //var command = ['up', 'down','right','left'];

   res.writeHead(200, headers);

  //res.end(command);
  if(req.method === 'GET'){
    //initialize(messages);
    //console.log('firstelement ', firstElement.dequeue());
    console.log('messagesQue: ', firstElement.messages)
    res.end(firstElement.dequeue());
  } else {
      res.end();
  }
  next(); // invoke next() at the end of a request to help with testing!
};


// module.exports.get = (req, res, next = ()=>{}) => {
//   console.log('Serving request type ' + req.method + ' for url ' + req.url);
//   var commend = ['up', 'down','right' 'left'];

//   res.writeHead(200, headers);
//   res.end();
//   next(); // invoke next() at the end of a request to help with testing!
// };