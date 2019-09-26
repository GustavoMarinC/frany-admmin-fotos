import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './globals';

@Injectable()

export class LoginService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url= GLOBAL.url;
    }

    login(usuario: any){
        let json = JSON.stringify(usuario);
        let params = "json="+json;
        console.log(params);
        console.log("url: "+this.url+"login");
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+"login",params,{headers:headers})
    }
}
