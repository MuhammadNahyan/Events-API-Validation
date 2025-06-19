const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const eventsRouter = require('./routes/events');
const errorHandler = require('./middleware/errorHandler');

dotenv.config()

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    //|| 'mongodb://localhost:27017/events-api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//}
.then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/events', eventsRouter);

app.use(errorHandler);

// Start server only if file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;