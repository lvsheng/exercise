try angular2

## TypeScript
### install & run
```bash
npm install -g typescript@^1.5.0-beta
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
# for windows, using `C:Program Files/nodejs/tsc` rather than `tsc` 
```

### install angular2 by tsd package management for DefinitelyTyped
```bash
npm install -g tsd
tsd query angular2 --action install
```

## lib
* traceur-runtime.js
* system@0.16.7.js
    * es6-module-loader@0.16.5.js will be loaded by system@0.16.7.js, so prepare the file
* angular2.dev.js

## load your app by System.js
`System.import('app');`