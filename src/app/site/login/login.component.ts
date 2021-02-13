import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RecaptchaComponent, RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @ViewChild('recaptcha') private recaptcha!: any;

    loginForm: FormGroup;
    hide = true;
    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            password: [null, Validators.required]
        });
    }

    ngOnInit(): void {

    }

    submit() {
        if (!this.loginForm.valid) {
            return;
        }
        console.log(this.loginForm.value);
    }

    public resolved(captchaResponse: string): void {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    public onError(errorDetails: RecaptchaErrorParameters): void {
        console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    }

    ngOnDestroy() {
        this.recaptcha.elementRef.nativeElement.remove();
    }
}
