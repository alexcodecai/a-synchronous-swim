
const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(` ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};

