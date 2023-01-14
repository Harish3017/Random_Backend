const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const mongoose = require("mongoose");

const app = require("./app");

const connectionString = process.env.MONGO_URI;

const connectDatabase = async () => {
    try {
      await mongoose
        .connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("Connected to MongoDB database successfully.");
        })
        .catch((error) => {
          console.log("Error connecting to MongoDB");
        });
    } catch (error) {
      console.log("Database connection error");
    }
  };
console.log("Connected DB:"+connectionString);
mongoose.set('strictQuery', false);
connectDatabase();
app.listen(process.env.PORT, () =>{
    console.log("App Backend is Running on " +process.env.PORT);
})