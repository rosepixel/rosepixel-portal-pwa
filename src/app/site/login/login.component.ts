import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    hide = true;
    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private formBuilder: FormBuilder,
        private recaptchaV3Service: ReCaptchaV3Service
    ) {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            password: [null, Validators.required]
        });
    }

    async ngOnInit(): Promise<void> {
        (await this.getRecaptcha())?.classList.remove("hidden");
    }

    submit() {
        if (!this.loginForm.valid) {
            return;
        }
        console.log(this.loginForm.value);

        this.recaptchaV3Service.execute('importantAction')
            .subscribe((token) => this.handleToken(token));
    }

    public handleToken(token: string): void {
        console.log(`Resolved captcha with response: ${token}`);
    }

    async ngOnDestroy() {
        (await this.getRecaptcha())?.classList.add("hidden");
    }

    private async getRecaptcha() {
        return (await Promise.resolve(this.document.getElementsByClassName('grecaptcha-badge'))).item(0);
    }
}
