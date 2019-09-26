import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { GLOBAL } from './globals';
import { Photo } from './../models/photo';

@Injectable()

export class PhotoService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    addPhoto(photo:Photo){

        let json = JSON.stringify(photo);
        let params = 'json='+json;
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'guardar_foto',params,{headers:headers});

    }

    
    makeFileRequest(url: string, params:Array<String>, files: Array<any>){
        console.log("files:: "+files);
        return new Promise((resolve,reject)=>{
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append('uploads',files[i],files[i].name)
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("post",url,true);
            xhr.send(formData);
        })
    }

    listar_photos(tabla:string){
        return this._http.get(this.url+'fotos/'+tabla);
    }

    eliminar_foto(foto : any){
        let json = JSON.stringify(foto);
        let params = "json="+json;
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'delete-foto',params,{headers:headers})
    }
}
