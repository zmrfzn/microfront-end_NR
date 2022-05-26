import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Microfrontend } from '../model/microfrontend.model';
import { buildRoutes } from '../utils/route-utils';


@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'remoteOne',
        exposedModule: 'SimpleDynamic',

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: 'MFE1 (Simple)',
        routePath: 'remote-one',
        ngModuleName: 'SimpleDynamicModule',
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'remoteOne',
        exposedModule: 'DynamicRouting',

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: 'mfe1 (internal routes)',
        routePath: 'rone-internal-routing',
        ngModuleName: 'DynamicModule',
      },
      // {
      //   // For Loading
      //   remoteEntry: 'http://localhost:4202/remoteEntry.js',
      //   remoteName: 'remoteTwo',
      //   exposedModule: 'SharedHTTP',

      //   // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
      //   displayName: 'Shared HTTP (R2)',
      //   routePath: 'rtwo-shared-http',
      //   ngModuleName: 'SharedHttpModule',
      // }
    ];
  }
}
