

class User {

    id          : number;
    firstName   : string;
    lastName    : string;

    documentId  : string;
    password    : string;

    constructor(id: number, firstName: string, lastName:string, documentId:string, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.documentId = documentId;
        this.password  = password;
    };


    getMyProfile() {

    };

};


export default User;