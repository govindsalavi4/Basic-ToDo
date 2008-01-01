export class ToDo {
    public Id:number;
    public Title:string;
    public Cat_Id:number;
    public isCompleted:boolean;

    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
