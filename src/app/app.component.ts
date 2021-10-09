import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled3';
  data:any;
  label = 'click me'
  constructor(private service : AppService) { };
  ngOnInit() {
   console.log('Angular start')
  }
  
  myclick(){
	  this.service.get().subscribe(value => {

      this.data=value;
      console.log(this.data);
	  this.label= this.data.items
    })
  }
}
