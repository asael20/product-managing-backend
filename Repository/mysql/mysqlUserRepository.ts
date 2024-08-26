import {Knex} from 'knex';
import User from "../../domain/entities/user";
import UserRepository from "../interfaces/userRepository";


class MySQLUserRepository implements UserRepository{

    private knex: Knex;

    constructor(dbConnection:Knex) {
        this.knex = dbConnection;
    }

    insertUser(user: User): string {

        

        throw new Error("Method not implemented.");
    };

    
    async getUserByDocumentId(documentId: string): Promise<string> {
        const [result] = await this.knex('users').where('document_id', documentId);
        let name = null;
        if(!result) {
            name = 'None';
        } else {
            name = result.first_name;
        }

       
        return name;
    };



};


export default MySQLUserRepository;