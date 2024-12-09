export class Wrapper<T> {
    private _status:number
    private _data:T
    private _message:string

    constructor(status:number,data:T,message:string){
        this._status = status
        this._data = data
        this._message = message
    }
    get status():number {
        return this._status
    }

    get data():T {
        return this._data
    }

    get message():string {
        return this._message
    }
}