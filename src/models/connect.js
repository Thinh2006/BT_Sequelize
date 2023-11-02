import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(config.databaseName, config.databaseUserName, config.databasePassword, {
    port: config.databasePort,
    dialect: "mysql",
    host: config.databaseHost
})

export default sequelize
