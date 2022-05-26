import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CocoaCuxModule } from "@mitel-internal/cocoa/cux";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CocoaComponent } from "./cocoa.component";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [CocoaComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
        { 
        path: '', 
        component: CocoaComponent, 
        }
        ]),
    CocoaCuxModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
            deps: [HttpClient]
        }
    })
    ]
})

export class CocoaComponentsModule{

}