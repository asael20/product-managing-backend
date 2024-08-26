import knex, {Knex} from 'knex';
import Repository from "../interfaces/repository";
import UserRepository from "../interfaces/userRepository";
import MySQLUserRepository from "./mysqlUserRepository";
import { MySQLConfig } from './config/constants';

class MySQLRepository implements Repository {

    public static instance : Repository;


    userRepository: UserRepository ;

    constructor(dbConnection: Knex) {
        this.userRepository = new MySQLUserRepository(dbConnection);
    }


    static async getRepository(): Promise<Repository> {

        console.log('[DB instance calling]')

        if(!this.instance) {

            const dbConnection: Knex = knex(MySQLConfig);
            
            this.instance = new MySQLRepository(dbConnection);
            console.log('>>>> DB Connected', dbConnection.client.pool);
        };

        return this.instance;
    }
   

};

export default MySQLRepository;


