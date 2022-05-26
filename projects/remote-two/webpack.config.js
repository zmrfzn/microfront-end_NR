const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteTwo"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "remoteTwo",
        filename: "remoteEntry.js",
        exposes: {
            SharedHTTP: './projects/remote-two/src/app/shared-http/shared-http.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "shell@http://localhost:4200/remoteEntry.js",
        //     "remote-one": "remote-one@http://localhost:4201/remoteEntry.js",
        //     "remote-three": "remote-three@http://localhost:4203/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: ">11.2.7 <=11.2.14" }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: ">11.2.7 <=11.2.14" }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: ">11.2.7 <=11.2.14" }, 
          "@angular/router": { singleton: true, strictVersion: true,requiredVersion: ">11.2.7 <=11.2.14" },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
