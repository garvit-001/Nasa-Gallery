var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const path = require("path");
const asyncHandler = require("express-async-handler");
const app = express();
app.use(cors());

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const GOOGLE_CLIENT_ID =
//   "158478109976-c6tpta17f68j71tcdesb2ad8ahucgkco.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

const DB =
  "mongodb+srv://Garvit_001:Garvit123@cluster0.igfkzba.mongodb.net/test";
mongoose
  .connect(DB)
  .then(console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  console.log(name, " ", email, " ", password);
  let users = new User({ name, email, password });
  await users.save();

  if (users) {
    res.status(201).json({ users });
  } else {
    res.status(401);
    res.json({
      message: "Invalid user data",
    });
    throw new Error("Invalid user data");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(email);
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.send("Login successful");
    } else {
      res.send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.send("Error logging in");
  }
});
// app.post("/Login", async (req, res) => {
//   const { email, password } = req.body;
//   User.findone({ email: email }, (err, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.send({ message: "login sucess", user: user });
//       } else {
//         res.send({ message: "wrong credentials" });
//       }
//     } else {
//       res.send("not register");
//     }
//   });
// });
// app.post("/Register", async (req, res) => {
//   console.log(req.body);
//   const { name, email, password } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: "user already exist" });
//     } else {
//       const user = new User({ name, email, password });
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ message: "sucessfull" });
//         }
//       });
//     }
//   });
// });

if (process.env.NODE_ENV == "production") {
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
