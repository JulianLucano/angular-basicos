import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
     HeroeComponent,
     ListadoComponent
    ],
    exports: [//los componentes que queremos que se visualicen
     HeroeComponent,
     ListadoComponent
    ],
    imports: [// debe importarse CommonModule, cuando se esta trabajando con ngFor,ngIf o ng-Template
     CommonModule
    ]
  })

export class HeroesModule{

}