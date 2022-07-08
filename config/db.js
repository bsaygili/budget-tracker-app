const mongoose = require("mongoose");
const { async } = require("rxjs");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
