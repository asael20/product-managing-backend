import Repository from "../../Repository/interfaces/repository";
import UserApplication from "./userApplication";

class Application {

    private static instance : Application;

    user: UserApplication;
   

    private constructor(repo: Repository) {
        this.user = UserApplication.getInstance(repo);
    };


    static initializeApplication(repo: Repository) {

        if(!this.instance) {
            this.instance = new Application(repo);
        };
    };

    static getInstance(): Application {
        return this.instance;
    };







};


export default Application;