import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

import { environment } from 'src/environments/environment';
import { MenuEntryDTO, MenuDTO } from './../../typescript-angular-client';
import { PageService } from 'src/app/shared/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = environment.title;
  companyName = environment.companyName;

  production = environment.production;

  menu: MenuDTO;
  menuEntries: Array<MenuEntryDTO> = [];
  constructor(private router: Router, private pageService: PageService) {}

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
