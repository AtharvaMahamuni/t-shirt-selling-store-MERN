const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    return res.send('This is home page');
});

const admin = (req, res) => {
    return res.send('This is admin page');
};

const isAdmin = (req, res, next) => {
    console.log("admin is running");
    next();
}

const isLoggedIn = (req, res, next) => {
    console.log("User is logged in");
    next();
}

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get('/login', (req, res) => {
    return res.send('You are using Login route');
})

app.get('/signup', (req, res) => {
    return res.send('Feel free to signup');
})

app.get('/signout', (req, res) => {
    return res.send("You are signed out");
})

app.get('/atharva', (req, res) => {
    return res.send('Atharva loves Twitter');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })