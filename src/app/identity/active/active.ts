import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActiveAccount } from '../../shared/Models/ActiveAccount';
import { Identity } from '../identity';

@Component({
  selector: 'app-active',
  standalone: false,
  templateUrl: './active.html',
  styleUrl: './active.scss'
})
export class Active implements AfterViewInit{
 activeParam = new ActiveAccount();
  constructor(
    private router: ActivatedRoute,
    private _service: Identity,
    private _toast: ToastrService,
    private route:Router
  ) {}

  ngAfterViewInit(): void {
    this.router.queryParams.subscribe((param) => {
      this.activeParam.email = param['email'];
      this.activeParam.token = param['code'];
    });
     this._service.active(this.activeParam).subscribe({
      next: (value) => {
        console.log(value);
        this._toast.success('Your account is active', 'SUCCESS');
        this.route.navigateByUrl('/Account/Login')
        return
      },
      error: (err) => {
          this._toast.error(err.error.message,'error'.toUpperCase())

        console.log(err);

      },
    });

}
}
