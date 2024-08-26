import User from "../../domain/entities/user";

interface UserRepository {

    insertUser(user:User): string;
    getUserByDocumentId(documentId:string): Promise<string>;

};

export default UserRepository;