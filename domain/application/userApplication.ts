import Repository from "../../Repository/interfaces/repository";

class UserApplication {

    private static instance : UserApplication;
    private repo:Repository;

    private constructor(repo: Repository) {
        this.repo = repo;
    };


    static getInstance(repo: Repository) : UserApplication{

        if(!this.instance) {
            this.instance = new UserApplication(repo);
        };

        return this.instance;
    };


    async getUserById(id: string) : Promise<string> {
        const value = await this.repo.userRepository.getUserByDocumentId(id);

        return value;
    }




}

export default UserApplication;