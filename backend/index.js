const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");

const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

/* `app.use(cors({ origin: "*" }))` is enabling Cross-Origin Resource Sharing (CORS) for all routes in
the Express application. CORS is a security feature implemented in web browsers that restricts web
pages from making requests to a different domain than the one that served the web page. By setting
the `origin` property to `"*"`, the server is allowing requests from any domain. This is useful
during development, but in production, it is recommended to set the `origin` property to the
specific domain(s) that are allowed to make requests to the server. */
app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

/* `app.use("/api/v1", userRoutes);` is mounting the `userRoutes` middleware on the `/api/v1` route.
This means that any request that starts with `/api/v1` will be handled by the `userRoutes`
middleware. For example, if there is a `GET` request to `/api/v1/users`, it will be handled by the
`userRoutes` middleware. */
app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
