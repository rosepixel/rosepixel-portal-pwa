import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        LoginComponent,
        RecoverPasswordComponent,
        PresentationComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PagesModule { }
