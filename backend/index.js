import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import TeamRoute from "./routes/TeamRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import LogDayRoute from "./routes/LogDayRoute.js";
import ChallengeRoute from "./routes/ChallengeRoute.js";
import ChallengeEntryRoute from "./routes/ChallengeEntryRoute.js";

dotenv.config();
const app = express();
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async ()=> {
//   await  db.sync();
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UserRoute);
app.use(RoleRoute);
app.use(TeamRoute);
app.use(AuthRoute);
app.use(ChallengeRoute);
app.use(LogDayRoute);
app.use(ChallengeEntryRoute);

// store.sync();

app.listen(process.env.PORT, () => {
  console.log("Server sedang berjalan..");
});
