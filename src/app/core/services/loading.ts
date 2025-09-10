import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class Loading {
  requestCount=0
  constructor(private service:NgxSpinnerService){

  }


loading()
{
  this.service.show(undefined,{
     bdColor: 'rgba(0, 0, 0, 0.8)',
      size: 'large',
      color: '#fff',
      type: 'square-jelly-box',
      fullScreen: true,
  })
}

 hideLoader() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.service.hide();
    }
  }

}
