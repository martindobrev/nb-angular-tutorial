import { Component, OnInit } from '@angular/core';
import { PageControllerService, PageDTO } from 'src/app/typescript-angular-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pages: Array<PageDTO>;

  constructor(private pageControllerService: PageControllerService) { }

  ngOnInit() {


    this.pageControllerService.getPagesUsingGET().subscribe(pageCollectionDTO => {
      this.pages = pageCollectionDTO.pages;
    });
  }

}
