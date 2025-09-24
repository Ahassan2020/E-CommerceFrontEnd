import { ResetPassword } from './../../shared/Models/ResetPassowrd';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Identity } from '../identity';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  ResetValue = new ResetPassword();
  constructor(private router: ActivatedRoute,
     private fb: FormBuilder,
     private _service: Identity,
    private route:Router
    ) {}
  ngOnInit(): void {
    this.router.queryParams.subscribe((param) => {
      this.ResetValue.email = param['email'];
      this.ResetValue.token = param['code'];
    });
    this.FormValidation()
  }

  FormValidation() {
    this.formGroup = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[#$@!.\-])[A-Za-z\d#$@!.\-]{8,}$/
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[#$@!.\-])[A-Za-z\d#$@!.\-]{8,}$/
          ),
        ],
      ],

    },
    {validator:this.PasswordMatchValidation}
  );
  }

  PasswordMatchValidation(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');
    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
    } else {
      confirmPasswordControl?.setErrors({ passwordMisMatch: true });
    }
  }

  get _password() {
    return this.formGroup.get('password');
  }
  get _confirmPassword() {
    return this.formGroup.get('confirmPassword');
  }

  Submit(){
    if(this.formGroup.valid){
      this.ResetValue.password=this.formGroup.value.password
      this._service.ResetPassword(this.ResetValue).subscribe({
        next:()=>{
            this.route.navigateByUrl('/Account/Login')
        },error(err) {
          console.log();

        },
      })
    }
  }

}
