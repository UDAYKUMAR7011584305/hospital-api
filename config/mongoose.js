const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const conn = await mongoose.connect('mongodb+srv://udaykumar9910911052:tPU4jqbmUM7dIoU6@cluster0.l6vcald.mongodb.net/?retryWrites=true&w=majority');

      console.log("MongoDB Connection Established");
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
module.exports = connectDB;
