import { Component, OnInit } from '@angular/core';
import { Photo } from './../models/photo';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './../services/globals';
import { PhotoService } from './../services/photo.services';


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
  providers: [PhotoService]
})
export class AddPhotoComponent implements OnInit {

  public Photo: Photo;
  public filesToUpLoad;
  public tipos;

  constructor(
    private _photoService: PhotoService
  ) { 
    this.tipos=['fashion','lingerie','nu_artistique','sport','photos','fetiche','portrait'];
    this.Photo = new Photo(0,'','','','');
  }

  ngOnInit() {
    
  }

  savePhoto(){
    this._photoService.addPhoto(this.Photo).subscribe(
      (result: any)=>{
        if(result.code==200){
           alert('Se agrego la foto');// this._router.navigate(['/productos']);
        }else{
            console.log(result);
        }
    },
    (error: any)=>{
        console.log(error);
    }

    );

  }
  onSubmit(){
    if(this.fileChangeEvent.length>=1){
      this._photoService.makeFileRequest(GLOBAL.url+"/upload-file",[],this.filesToUpLoad)
                .then((result:any)=>{
                    console.log('result add img:', result);
                    this.Photo.imagen = result.file_name;
                    this.savePhoto();
                },(error)=>{
                    console.log("ERROR: "+error);
                }
            );
    }
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpLoad = <Array<File>>fileInput.target.files;

}
}
