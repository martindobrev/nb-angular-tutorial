import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { Router, RouterEvent, Event, ActivationStart, ActivationEnd, NavigationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { readElementValue } from '@angular/core/src/render3/util';
import { PageService } from './shared/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private router: Router, private pageService: PageService) {
    
  }

  ngOnInit(): void {
  }
}
