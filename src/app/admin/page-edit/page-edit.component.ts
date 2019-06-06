import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDTO, PageControllerService } from 'src/app/typescript-angular-client';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit, OnDestroy {
  
  page: PageDTO;
  pageForm: FormGroup;

  get content() {
    return this.pageForm.get('content');
  }

  edit = true;

  subscriptions: Array<Subscription> = [];
  
  constructor(private pageControllerService: PageControllerService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(data => {
        if (data.page) {
          this.page = data.page;
        }
      })
    );

    this.pageForm = new FormGroup({
      id: new FormControl(this.page.id, Validators.required),
      order: new FormControl(this.page.order, Validators.required),
      name: new FormControl(this.page.name, Validators.required),
      slug: new FormControl(this.page.slug, Validators.required),
      published: new FormControl(this.page.published),
      content: new FormControl(this.page.content, Validators.required)
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
    this.subscriptions.push(
      this.pageControllerService.editPageUsingPUT(this.page.id, this.page).subscribe(data => {
        this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
      }, error => {
        console.log('ERROR');
      })
    );
  }
}
