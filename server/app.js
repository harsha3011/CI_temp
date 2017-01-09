
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/test';

console.log('Mongoose Connecting to:', mongoUrl);
mongoose.connect(mongoUrl, (err) => {
  if(err) { console.error('Mongoose Connection Error:',err); return; }
  console.log('Mongoose connected to:', mongoUrl);
});

process.on('SIGINT', () => {
  console.log('Caught Interrupt Signal. Terminating Mongoose Connection');
  mongoose.connection.close();
});
