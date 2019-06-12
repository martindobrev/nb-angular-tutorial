import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDTO, PageControllerService } from './../../typescript-angular-client';
import { PageNameValidator } from '../utils/page-name.validator';

@Component({
  selector: 'app-page-edit-template-form',
  templateUrl: './page-edit-template-form.component.html',
  styleUrls: ['./page-edit-template-form.component.css']
})
export class PageEditTemplateFormComponent implements OnInit {

  page: PageDTO;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private pageControllerService: PageControllerService,
    private pageNameValidator: PageNameValidator) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      if (data.page) {
        this.page = data.page;
        this.pageNameValidator.pageId = this.page.id;
      }
    })
  }

  onSubmit() {
    this.pageControllerService.editPageUsingPUT(this.page.id, this.page).subscribe(data => {
      this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
    }, error => {
      console.log('ERROR');
    });
  }

}
