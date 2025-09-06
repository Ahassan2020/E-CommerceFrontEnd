import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { IProduct } from './shared/Models/Product';
import { IPagnation } from './shared/Models/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{

  ngOnInit(): void {
  }
  title="ahmed Hassan";
}
