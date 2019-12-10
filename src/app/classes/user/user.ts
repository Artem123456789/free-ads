export class User {

    private _id: number;
    private _name: string;
    private _email: string;
    private _password: string;

    constructor(id: number = 0, name: string = "", email: string = "", password: string = ""){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get email(){
        return this._email;
    }

    public get password(){
        return this._password;
    }

    public set id(id: number){
        this._id = id;
    }

    public set name(name: string){
        this._name = name;
    }

    public set email(email: string){
        this._email = email;
    }

    public set password(password: string){
        this._password = password;
    }

}
