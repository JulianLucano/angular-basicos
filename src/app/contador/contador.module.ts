
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
     ContadorComponent
    ],
    exports: [//los componentes que queremos que se visualicen
     ContadorComponent
    ]
  })

export class ContadorModule{

}