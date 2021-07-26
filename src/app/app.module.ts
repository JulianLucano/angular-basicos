import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent
  ],
  imports: [ // se importan los diferentes modulos de la aplicacion
    BrowserModule,
    ContadorModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
