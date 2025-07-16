const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

// app.use(express.urlencoded({extended:false }))

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/setCookies", (req, res) => {
    let data = [
        {
            Username: "Rohan",
            Email: "Rohan@gmail.com",
            Password: 182918
        }
    ];
    res.cookie("UserData",JSON.stringify(data));
    res.cookie("Username", "Rohan",{maxAge:5000});
    res.cookie("Email", "Rohan@gmail.com",{maxAge:10000});

    res.send("Cookies set in browser");
});

app.get("/getCookies", (req, res) => {
    // res.json({Username:req.cookies.Username,Email:req.cookies.Email});
    res.json(JSON.parse(req.cookies.UserData));
})

app.get("/clearCookies", (req, res) => {
    res.clearCookie("data");
    res.redirect("/");
})

app.listen(5000);