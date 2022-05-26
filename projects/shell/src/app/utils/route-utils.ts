
import { loadRemoteModule } from '@angular-architects/module-federation/src/utils/dynamic-federation';
import { Routes } from '@angular/router';
import { AppRoutes } from '../app-routing.module';
import { Microfrontend } from '../model/microfrontend.model';



export function buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...AppRoutes, ...lazyRoutes];
}