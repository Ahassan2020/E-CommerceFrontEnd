import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from "./core/core-module";
import { SharedModule } from './shared/shared-module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShopModule } from './shop/shop-module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { loaderInterceptor } from './core/interceptor/loader-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    App
  ],
  imports: [
 BrowserModule,
     AppRoutingModule,
    HomeModule,
    RouterLink,

      ToastrModule.forRoot(
      {
        closeButton:true,
        positionClass: 'toast-top-right',
         countDuplicates: true,
      timeOut:1500,
      progressBar:true,
      }
     ),
    CoreModule,NgxSpinnerModule,
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),
{    provide:HTTP_INTERCEPTORS,
  useClass:loaderInterceptor,multi:true
}
 ],
  bootstrap: [App]
})
export class AppModule { }
