import { Component, OnInit } from '@angular/core';
import { PageDTO, PageControllerService } from 'src/app/typescript-angular-client';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-delete',
  templateUrl: './page-delete.component.html',
  styleUrls: ['./page-delete.component.css']
})
export class PageDeleteComponent implements OnInit {

  subscriptions: Array<Subscription> = [];

  page: PageDTO;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private pageControllerService: PageControllerService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(data => {
        console.log('INSIDE SUBSCRIPTION...');
        this.page = data.page;
      })
    );

    console.log('PAGE LOADED: ',this.page);
  }

  goToPages() {
    this.router.navigate(['./../..'], {relativeTo: this.activatedRoute});
  }

  deleteAndGoToPages() {
    this.subscriptions.push(
    this.pageControllerService.deletePageUsingDELETE(this.page.id).subscribe(page => {
      this.goToPages();
    })
    );
  }

}
