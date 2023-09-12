import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
})

export default db;