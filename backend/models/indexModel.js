import { Sequelize } from "sequelize";
import db from "../config/Database";
import UserModel from "./UserModel";
import RoleModel from "./RoleModel";
import TeamModel from "./TeamModel";
import LogDayModel from "./LogDayModel";
import ChallengeModel from "./ChallengeModel";
import ChallengeEntryModel from "./ChallengeEntryModel";

const sequelize = db;

const User = UserModel(sequelize);
const Role = RoleModel(sequelize);
const Team = TeamModel(sequelize);
const LogDay = LogDayModel(sequelize);
const Challenge = ChallengeModel(sequelize);
const ChallengeEntry = ChallengeEntryModel(sequelize);

User.hasMany(LogDay, { foreignKey: "user_id" });
LogDay.belongsTo(User, { foreignKey: "user_id", as: "creator" });

export { User, Role, Team, LogDay, Challenge, ChallengeEntry };
export default sequelize;
