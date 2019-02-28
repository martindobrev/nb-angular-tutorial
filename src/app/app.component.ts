import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { Router, RouterEvent, Event, ActivationStart, ActivationEnd, NavigationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { readElementValue } from '@angular/core/src/render3/util';
import { PageService } from './page.service';
import { Menu, MenuEntry } from './api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = environment.title;
  companyName = environment.companyName;

  production = environment.production;

  menu: Menu;
  menuEntries: Array<MenuEntry> = [];

  constructor(private router: Router, private pageService: PageService) {
    
  }

  ngOnInit(): void {
    console.log('AppComponent initialized');
    this.router.events.subscribe( (event: RouterEvent)  => {
      if(event instanceof NavigationEnd) {
        console.log(event.toString());
      }
    });

    this.pageService.getMenu().subscribe(menu => {
      if (menu) {
        if (menu.menuEntries) {
          this.menuEntries = menu.menuEntries;
        }
      }
    })
  }
}
