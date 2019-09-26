import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { ComponentLoginComponent } from './component-login/component-login.component';
import { PanelComponent } from './panel/panel.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';


const appRoutes: Routes=[
    {path: '', component: ComponentLoginComponent},
    {path: 'panel', component: PanelComponent},
    {path: 'addPhoto', component: AddPhotoComponent},
    {path: 'addPhoto', component: AddPhotoComponent},
    {path: 'fotos/:tabla', component: ListaFotosComponent},
    {path: '**', component: ComponentLoginComponent}
]

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);