import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    hide = true;
    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    constructor(
        private formBuilder: FormBuilder,
        private recaptchaV3Service: ReCaptchaV3Service,
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

        this.recaptchaV3Service.execute('importantAction')
            .subscribe((token) => this.handleToken(token));
    }

    public handleToken(token: string): void {
        console.log(`Resolved captcha with response: ${token}`);
    }
}
