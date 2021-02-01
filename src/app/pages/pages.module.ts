import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login';
import { RecoverPasswordComponent } from './recover-password';

@NgModule({
    declarations: [
        LoginComponent,
        RecoverPasswordComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PagesModule { }
