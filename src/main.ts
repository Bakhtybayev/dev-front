import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DecimalPipe } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

bootstrapApplication(AppComponent, {
  providers: [
    DecimalPipe,
    // RouterOutlet,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(
      IonicModule.forRoot({}),
      BrowserAnimationsModule,
      IonicStorageModule.forRoot({
        name: '__mydb',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
      })
    ),
    provideRouter(routes),
  ],
});
