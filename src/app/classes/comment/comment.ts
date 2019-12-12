export class Comment {

    private _id: number;
    private _authorName: string;
    private _text: string;
    private _date: Date;

    constructor(id: number = 0, authorName: string = "", text: string = "", date: Date = new Date()){
        this.id = id;
        this.authorName = authorName;
        this.text = text;
        this.date = date;
    }

    public get id(){
        return this._id;
    }

    public get authorName(){
        return this._authorName;
    }

    public get text(){
        return this._text;
    }

    public get date(){
        return this._date;
    }

    public set id(id: number){
        this._id = id;
    }

    public set authorName(authorName: string){
        this._authorName = authorName;
    }

    public set text(text: string){
        this._text = text;
    }

    public set date(date: Date){
        this._date = date;
    }

}
