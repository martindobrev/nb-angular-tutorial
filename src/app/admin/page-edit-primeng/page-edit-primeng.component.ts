import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageControllerService, PageDTO } from './../../typescript-angular-client';
import { Router, ActivatedRoute } from '@angular/router';
import { PageNameValidator } from '../utils/page-name.validator';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page-edit-primeng',
  templateUrl: './page-edit-primeng.component.html',
  styleUrls: ['./page-edit-primeng.component.css']
})
export class PageEditPrimengComponent implements OnInit {

  subscriptions: Array<Subscription> = [];
  page: PageDTO;
  pageForm: FormGroup;
  simpleFormControl: FormControl;
  
  constructor(private pageControllerService: PageControllerService, 
    private router: Router,
    private pageNameValidator: PageNameValidator,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(data => {
        if (data.page) {
          this.page = data.page;
          this.pageNameValidator.pageId = this.page.id;
        }
      })
    );

    this.pageForm = new FormGroup({
      id: new FormControl(this.page.id, Validators.required),
      order: new FormControl(this.page.order, Validators.required),
      name: new FormControl(this.page.name, Validators.required),
      slug: new FormControl(this.page.slug, 
        { 
          validators: [Validators.required],
          asyncValidators: [this.pageNameValidator.validate.bind(this.pageNameValidator)]
        }
      ), 
      published: new FormControl(this.page.published),
      content: new FormControl(this.page.content, Validators.required)
    });

    this.pageForm.valueChanges.subscribe(pageData => {
      this.page.content = pageData.content;
      this.page.published = pageData.published;
      this.page.name = pageData.name;
      this.page.slug = pageData.slug;
    });

    this.simpleFormControl = new FormControl(this.page.name, [Validators.required, Validators.minLength(3)]);
  }

  onSubmit() {
    this.pageControllerService.editPageUsingPUT(this.page.id, this.page).subscribe(data => {
      this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
    }, error => {
      console.log('Error when editing page', this.page);
    });
  }
}
