import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing,appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { PanelComponent } from './panel/panel.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLoginComponent,
    PanelComponent,
    AddPhotoComponent,
    ListaFotosComponent
  ],
  imports: [
  
  BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
