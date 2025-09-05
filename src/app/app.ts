import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  baseUrl='https://localhost:7158/api/Product/get-all';
  category:any;
  constructor(private http:HttpClient){

  }
  getGategory(){
    return this.http.get(this.baseUrl).subscribe({
      next:((value:any)=>{
this.category=value.data
      })
    })
  }
  ngOnInit(): void {
    this.getGategory();
  }
  title="ahmed Hassan";
}
