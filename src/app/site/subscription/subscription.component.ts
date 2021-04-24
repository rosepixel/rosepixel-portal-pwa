import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

    public contactForm: FormGroup;

    private emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    constructor(private formBuilder: FormBuilder) {
        this.contactForm = this.formBuilder.group({
            name: [null, Validators.required],
            phone: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            message: [null, Validators.required]
        });
    }

    ngOnInit(): void {
    }

    public submit() {
        if (!this.contactForm.valid) {
            return;
        }
        console.log(this.contactForm.value);
    }

    public resolved(captchaResponse: string): void {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    public onError(errorDetails: RecaptchaErrorParameters): void {
        console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    }


}
