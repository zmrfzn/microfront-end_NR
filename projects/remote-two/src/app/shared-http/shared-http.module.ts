import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonSharedModule } from "../shared/shared.module";
import { SharedHttpComponent } from "./shared-http.component";

@NgModule({
    declarations: [SharedHttpComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
        { 
        path: '', 
        component: SharedHttpComponent, 
        }
        ]),
        CommonSharedModule
    ]
})

export class SharedHttpModule{

}