export class Shop {

   
    constructor(
        private _id: number,
        private _name: String,
        private _email: String,
        private _description: String,
        private _image: String,
        private _distance: Number,
        private _liked: boolean    ) { }

    public get liked(): boolean {
        return this._liked;
    }
    public set liked(value: boolean) {
        this._liked = value;
    }

    public get distance(): Number {
        return this._distance;
    }
    public set distance(value: Number) {
        this._distance = value;
    }
    public get image(): String {
        return this._image;
    }
    public set image(value: String) {
        this._image = value;
    }
    public get description(): String {
        return this._description;
    }
    public set description(value: String) {
        this._description = value;
    }
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

  
}