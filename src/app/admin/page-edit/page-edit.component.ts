import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDTO, PageControllerService } from 'src/app/typescript-angular-client';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PageNameValidator } from '../utils/page-name.validator';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit, OnDestroy {
  
  page: PageDTO;
  pageForm: FormGroup;

  /* Convenience getters of the controls */
  get content() {
    return this.pageForm.get('content');
  }

  get slug() {
    return this.pageForm.get('slug');
  }

  get name() {
    return this.pageForm.get('name');
  }

  edit = true;

  subscriptions: Array<Subscription> = [];
  
  constructor(private pageControllerService: PageControllerService, 
    private router: Router,
    private pageNameValidator: PageNameValidator,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
   

    this.subscriptions.push(
      this.activatedRoute.data.subscribe(data => {
        if (data.page) {
          this.page = data.page;
          this.pageNameValidator.pageId = this.page.id;
        }
      })
    );
    
    /*
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
      content: new FormControl(this.page.content, Validators.required),
    });

    this.content.valueChanges.subscribe(newValue => {
      this.slug.setValue(this.slug.value + '!');
    });
    */
    
    // FORM BUILDER METHOD
    this.pageForm = this.formBuilder.group({
      id: [this.page.id, Validators.required],
      order: [this.page.order, Validators.required],
      name: [this.page.name, Validators.required],
      slug: [this.page.slug, this.pageNameValidator],
      published: [this.page.published],
      content: [this.page.content, Validators.required]
    });
    

    this.subscriptions.push(
      this.pageForm.valueChanges.subscribe(pageData => {
        this.page.content = pageData.content;
        this.page.published = pageData.published;
        this.page.name = pageData.name;
        this.page.slug = pageData.slug;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onEdit() {
      this.pageControllerService.editPageUsingPUT(this.page.id, this.page).subscribe(data => {
        this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
      }, error => {
        console.log('Error when editing page', this.page);
      });
  }
}
