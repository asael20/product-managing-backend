import dotenv from 'dotenv';
import { Knex } from 'knex';

dotenv.config()

const {
    MYSQL_DB_PORT = '3306',
    MYSQL_DB_HOST,
    MYSQL_DB_PASSWORD,
    MYSQL_DB_USER,
    MYSQL_DB_NAME
} = process.env;


const MySQLConfig : Knex.Config =  {
    client: 'mysql',
    connection: {

        host: MYSQL_DB_HOST,
        port: parseInt(MYSQL_DB_PORT),
        user: MYSQL_DB_USER,
        password: MYSQL_DB_PASSWORD,
        database: MYSQL_DB_NAME,
        

    }
};

export {MySQLConfig};