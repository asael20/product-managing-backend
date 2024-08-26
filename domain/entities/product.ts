import Category from "./category";

class Product {

    id: number;
    name: string;
    
    stock : number = 0;
    image?: string;
    category?: Category;

    constructor(id: number, name:string, ) {
        this.id = id;
        this.name = name;
    };

}