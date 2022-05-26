
import { loadRemoteModule } from '@angular-architects/module-federation/src/utils/dynamic-federation';
import { Routes } from '@angular/router';
import { AppRoutes } from '../app-routing.module';
import { Microfrontend } from '../model/microfrontend.model';

import { UrlMatcher, UrlSegment } from '@angular/router';


export function buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...AppRoutes, ...lazyRoutes];
}

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.startsWith(prefix)) {
            return ({ consumed: url});
        }
        return null;
    };
}
