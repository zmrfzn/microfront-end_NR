import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SimpleDynamicComponent } from "./simple-dynamic.component";

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
        { 
        path: '', 
        component: SimpleDynamicComponent, 
        }
        ])
    ]
})

export class SimpleDynamicModule{

}