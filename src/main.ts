import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { OfficeAccountAppComponent, environment } from './app/';
import * as moment from 'moment';


moment().format();

if (environment.production) {
  enableProdMode();
}

bootstrap(OfficeAccountAppComponent);

