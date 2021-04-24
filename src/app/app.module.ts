import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import { environment } from '@environments/environment';

import { SiteModule } from './site';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        RecaptchaV3Module,
        SiteModule,
        HttpClientModule
    ],
    providers: [{
        provide: DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    }, {
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.v3.key
    }, {
        provide: APOLLO_NAMED_OPTIONS,
        useFactory(httpLink: HttpLink): NamedOptions {
            return {
                security: {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: environment.endpoint.security.api,
                    }),
                },
            };
        },
        deps: [HttpLink],
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
