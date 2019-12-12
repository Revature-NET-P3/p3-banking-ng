import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

var html = document.documentElement.innerHTML
document.documentElement.innerHTML = html.replace("Welcome to P3Bank!", environment.title);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
