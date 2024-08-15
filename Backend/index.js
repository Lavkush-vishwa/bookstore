
import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config;

const PORT = process.env.PORT || 4000;
//connect to the mongodb
const MongoDBURI = "mongodb://localhost:27017/bookstore"
try {
    mongoose.connect(MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to the mongodb")
} catch (error) {
    console.log("Error", error)

}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server  is listening on port ${PORT}`)
}); 