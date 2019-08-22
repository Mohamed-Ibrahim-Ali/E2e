import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  data:any;
  term : string ;

  constructor( private ps: DataService , private ro:Router) { 
    this.ps.getdata().subscribe(da => this.data = da.hotels);
  }

  back() {
    this.ro.navigate(['/']);
  }

  ngOnInit() {
  }

}
