import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule } from "ng-recaptcha";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SiteModule } from './site';
import { environment } from '@environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RecaptchaModule,
        AppRoutingModule,
        SiteModule
    ],
    providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.v3.key
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
