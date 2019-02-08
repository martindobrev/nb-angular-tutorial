import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = environment.title;
  companyName = environment.companyName;

  production = environment.production;

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
