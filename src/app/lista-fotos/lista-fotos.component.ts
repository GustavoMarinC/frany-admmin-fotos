import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../services/photo.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Photo } from './../models/photo';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.css'],
  providers:[PhotoService]
})
export class ListaFotosComponent implements OnInit {
  public photos:Photo[];
  public tabla:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _photoService: PhotoService
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params)=>{
      this.tabla = params['tabla'];
    });
    this.getPhotos();
  }

  getPhotos(){
    console.log('inicio server');
    this._photoService.listar_photos(this.tabla).subscribe(
      (result:any)=>{
        if(result.code != 200){
          alert ("ERROR:"+result.code);
        }else{
          this.photos = result.data;
          console.log(this.photos);
        }
      },
      (error:any)=>{
        console.log('Error: '+error)
      }
    );
  }

  deleteFoto(id){
    this._photoService.eliminar_foto({'tabla':this.tabla, 'id': id}).subscribe(
      (result:any)=>{
        if(result.codigo != 200){
          alert("ERROR:"+result.codigo);
        }else{
          alert("Se elimino con exito");
          this.getPhotos();
        }
      },
      (error:any)=>{
        alert("ERROR:"+error)
      }
    )
  }
}
