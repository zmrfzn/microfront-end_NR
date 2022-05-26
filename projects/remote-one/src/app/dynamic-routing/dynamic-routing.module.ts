import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DarkHeadTableComponent } from "./dark-head-table/dark-head-table.component";
import { DarkTableComponent } from "./dark-table/dark-table.component";
import { DynamicRoutingComponent } from "./dynamic-routing.component";
import { GeneralTableComponent } from "./general-table/general-table.component";

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
        { 
        path: '', 
        component: DynamicRoutingComponent, 
        children: [
            {
                path:'',
                redirectTo: 'general-table',
                pathMatch: 'full' 
            },
            {
                path: 'general-table',
                component: GeneralTableComponent,
            },
            {
                path: 'dark-table',
                component: DarkTableComponent,
            },
            {
                path: 'dark-head-table',
                component: DarkHeadTableComponent,
            }
        ]
        }
        ])
    ]
})

export class DynamicModule{

}