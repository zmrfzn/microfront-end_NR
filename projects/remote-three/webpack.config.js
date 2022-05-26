const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteThree"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "remoteThree",
        filename: "remoteEntry.js",
        exposes: {
            SharedCocoa: './projects/remote-three/src/app/cocoa-components/cocoa-components.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "shell@http://localhost:4200/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: ">11.2.7 <=11.2.14" }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: ">11.2.7 <=11.2.14" }, 
          "@angular/router": { singleton: true, strictVersion: true,requiredVersion: ">11.2.7 <=11.2.14" },
          "@mitel-internal/cocoa/cux": { singleton: true, strictVersion: true,requiredVersion: ">=0.1.0 <=0.2.12" },
          "@mitel-internal/cocoa": { singleton: true, strictVersion: true,requiredVersion: ">=0.1.0 <=0.2.12" },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
