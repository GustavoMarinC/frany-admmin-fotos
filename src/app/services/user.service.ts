import { Injectable } from '@angular/core';
import { user } from './../models/user';


@Injectable()

export class UserService{
    private isUserLoggedIn:boolean;
    public userLogged: user;

    constructor(){
        this.isUserLoggedIn = false;
    }

    setUserLoggedIn(user:user){
        this.isUserLoggedIn = true;
        this.userLogged = user;
        localStorage.setItem('currentUser',JSON.stringify(user));
    }

    getUserLoggedIn(){
        return JSON.stringify(localStorage.getItem('currentUser'));
    }
}