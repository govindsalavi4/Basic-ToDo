export class Category {
    Cat_Id:number;
    Name:string;

    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
