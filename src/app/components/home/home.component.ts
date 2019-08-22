import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Data:any[];

  constructor( private da: DataService , private ro: Router) {
    this.da.getdata().subscribe(data => this.Data = data.hotels);
   }

   start: any;
   end: any;
   diff:any ;
   l:number;
   days: number;

   calc(f) {
    this.start = Date.parse(f.value.arrive);
    this.end = Date.parse(f.value.depart);
    this.diff = (this.end - this.start);
    this.l = 1000*60*60*24;
    this.days = (Math.floor(this.diff/this.l));
     if (this.start > this.end) {
       this.days = 0;
     }
   }
  go() {
    this.ro.navigate(['/hotels']);
  }
  ngOnInit() {
    
  }

}
