import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Project 3 Bank';
  private cookie: string;

constructor(private cookieService: CookieService){}

public ngOnInit(): void
{
   this.cookieService.set('tempHardcodedName', 'tempHardCodedValue');
   this.cookie = this.cookieService.get('tempHardcodedName');
   console.log(this.cookie);
}

}
