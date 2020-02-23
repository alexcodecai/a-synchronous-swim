
//messageQueue.messages = []; // the storage unit for messages

module.exports.messages = [];

module.exports.enqueue = (message) => {
  console.log(` ${message}`);
  this.messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  
  return this.messages.shift();
};

