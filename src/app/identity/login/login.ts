import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Identity } from '../identity';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  formGroup: FormGroup;
  emailModel: string = '';
  retrunUrl='/'
  constructor(
    private fb: FormBuilder,
    private _service: Identity,
    private route: Router,
    private router:ActivatedRoute,
    private coreService:CoreService
  ) {}
  ngOnInit(): void {
    this.FormValidation();
    const myModal = document.getElementById('exampleModal');
    const myInput = document.getElementById('myInput');

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
    this.router.queryParams.subscribe(param=>{
      this.retrunUrl=param["returnUrl"]||'/'
    })
  }
  FormValidation() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[#$@!.\-])[A-Za-z\d#$@!.\-]{8,}$/
          ),
        ],
      ],
    });
  }

  get _email() {
    return this.formGroup.get('email');
  }
  get _password() {
    return this.formGroup.get('password');
  }

  Submit() {
    if (this.formGroup.valid) {
      this._service.Login(this.formGroup.value).subscribe({
        next: (value) => {
          this.coreService.getUserName().subscribe();
          console.log(value);
          this.route.navigateByUrl(this.retrunUrl);
        },
        error(err) {
          console.log(err);
        },
      });
    }
  }

  SendEmailForgetpassword() {
    this._service.forgetPassword(this.emailModel).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
