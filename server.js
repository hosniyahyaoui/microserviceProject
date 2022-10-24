require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GITHUB_CLIENT_ID = "dff93181d55a5ee2861a";
const GITHUB_CLIENT_SECRET = "5b51b3d930c7a815ad3b819bf52d4ab3192ee98c";
const session = require("express-session");

const fileupload = require("express-fileupload");
const connectDB = require("./config/db");
const path = require("path");

// After you declare "app"

//connectDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "bla bla bla",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  fileupload({
    useTempFiles: true,
  })
);

//routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/upload"));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/user/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      console.log(profile);
    }
  )
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
