import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-component-login',
  templateUrl: './component-login.component.html',
  styleUrls: ['./component-login.component.css'],
  providers:[LoginService]
})
export class ComponentLoginComponent implements OnInit {

  public isAdmin: boolean;
  public admin  = {
    email : "",
    pass : ""
  };
  constructor(
    private router: Router,
    private _LoginService: LoginService
    ) { 
    this.isAdmin = false;  
  }

  ngOnInit() {
    this.admin.email = "";
    this.admin.pass = ""
  }

  login(){
      this.isAdmin = true;
      this._LoginService.login(this.admin).subscribe(
        (result: any)=>{
          if(result.codigo == 200){
            this.router.navigateByUrl('/panel');
          }else{
            alert(result.message);
          }
        },
        (error: any)=>{
          console.log("Error: "+error)
        }
      )
      
    
  }

}
