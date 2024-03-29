import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.registerForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            name: [null, Validators.required],
            password: [null, Validators.required],
            phone: [null, Validators.required]
        });
    }

    ngOnInit(): void {
    }

    submit() {
        if (!this.registerForm.valid) {
            return;
        }
        console.log(this.registerForm.value);
    }
}
