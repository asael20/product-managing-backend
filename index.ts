import dotenv from 'dotenv';
import server from './express_adapter/server';


dotenv.config();

const {
    SERVER_PORT = '3000'
} = process.env;

server.start(parseInt(SERVER_PORT));