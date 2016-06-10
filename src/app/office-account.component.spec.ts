import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OfficeAccountAppComponent } from '../app/office-account.component';

beforeEachProviders(() => [OfficeAccountAppComponent]);

describe('App: OfficeAccount', () => {
  it('should create the app',
      inject([OfficeAccountAppComponent], (app: OfficeAccountAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Application works!\'',
      inject([OfficeAccountAppComponent], (app: OfficeAccountAppComponent) => {
    expect(app.title).toEqual('My Application!');
  }));
});
