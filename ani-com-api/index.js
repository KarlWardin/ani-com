const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const usersRouter = require("./router/users");
const authRouter = require("./router/auth");
const postRouter = require("./router/posts");
const globalRouter = require("./router/globalChats")

dotenv.config();

const port = process.env.PORT || 8000;


mongoose.connect(process.env.MONGO_URL, 
                {useNewUrlParser: true,
                 useCreateIndex: true,
                 useFindAndModify: false,
                 useUnifiedTopology: true})
                 .then(()=>{ console.log("successful") })
                 .catch(err=>{console.log(err)});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",usersRouter);
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);
app.use("/api/globals",globalRouter);

app.listen(port,()=>{
   console.log(`successfully connected at port ${port}`);
});