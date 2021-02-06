import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    forgetPasswordForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.forgetPasswordForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            password: [null, Validators.required]
        });
    }


    ngOnInit(): void {
    }

    submit() {
        if (!this.forgetPasswordForm.valid) {
            return;
        }
        console.log(this.forgetPasswordForm.value);
    }

}
