import { Comment } from '../comment/comment';

export class Ad {

    private _id: number;
    private _authorId: number;
    private _name: string;
    private _category: string;
    private _header: string;
    private _text: string;
    private _date: Date;
    private _comments: Comment[];

    constructor(id: number = 0, authorId: number = 0, name: string = "", category: string = "", header: string = "", text: string = "", date: Date = new Date()){
        this.id = id;
        this.authorId = authorId;
        this.name = name;
        this.category = category;
        this.header = header;
        this.text = text;
        this.date = date;
    }

    public get id(){
        return this._id;
    }

    public get authorId(){
        return this._authorId;
    }

    public get name(){
        return this._name;
    }

    public get category(){
        return this._category;
    }

    public get header(){
        return this._header;
    }

    public get text(){
        return this._text;
    }

    public get date(){
        return this._date;
    }

    public get comments(){
        return this._comments;
    }

    public set id(id: number){
        this._id = id;
    }

    public set authorId(authorId: number){
        this._authorId = authorId;
    }

    public set name(name: string){
        this._name = name;
    }

    public set category(category: string){
        this._category = category;
    }

    public set header(header: string){
        this._header = header;
    }

    public set text(text: string){
        this._text = text;
    }

    public set date(date: Date){
        this._date = Object.assign({}, date);
    }

    public addComment(comment: Comment): void{
        this._comments.push(comment);
    }

}
