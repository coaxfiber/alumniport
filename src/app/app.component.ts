import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alumni';
  constructor(public global: GlobalService,private router: Router){
  	this.global.swalAlertError()
  }
}
