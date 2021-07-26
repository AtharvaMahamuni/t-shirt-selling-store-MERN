require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const app = express();

const authRoutes = require("./routes/auth");

// var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');




// DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to MongoDB");
});

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser());
app.use(cors());



// My Routes
app.use("/api", authRoutes);


// PORT
const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App is running at ${port}`);
});
