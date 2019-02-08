import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  // DISABLING LOGS - the EASY WAY :) Only warnings and errors will be shown
  console.log = function() {};
  console.debug = function() {};
  console.info = function() {};
  console.trace = function() {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
