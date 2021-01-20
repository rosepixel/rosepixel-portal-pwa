import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login';
import { RecoverPasswordComponent } from './recover-password';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    declarations: [
        LoginComponent,
        RecoverPasswordComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PagesModule { }
