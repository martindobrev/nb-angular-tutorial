import { Injectable, Directive, forwardRef } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PageControllerService } from './../../typescript-angular-client';
import { map, debounceTime, distinctUntilChanged, switchMap, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class PageNameValidator implements AsyncValidator {

    //private values: ReplaySubject<string> = new ReplaySubject();
    pageId = 0;

    constructor(private pageControllerService: PageControllerService) {}

    validate(control: AbstractControl):  Observable<ValidationErrors> {
        // if no changes or initially loaded 
        if (!control.valueChanges || control.pristine) {
            return of(null);
        }
        
        return control.valueChanges.pipe(
            map(value => value as string),
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap(value => this.checkPageSlug(value, this.pageId)),
            first() // necessary to terminate the observable, otherwise pending will always be true
        );
    }


    checkPageSlug(slug: string, ownId: number) {
        console.log('CHECKING PAGE SLUG: ' + slug + ' own id: ' + ownId);
        return this.pageControllerService.getPagesUsingGET().pipe(
            map(pageCollection => {
                if (pageCollection.pages.length > 0) {
                    var filteredResults = pageCollection.pages.filter(page => page.id !== ownId && page.slug == slug);
                    if (filteredResults.length > 0) {
                        console.log('RETURNING ERROR...');
                        return {'ERROR': 'ERROR'};
                    }
                }
                console.log('RETURNING NULL');
                return null;
            })
        );
    }
}

@Directive({
    selector: '[pageNameValidator]',
    providers: [
      {
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => PageNameValidator),
        multi: true
      }
    ]
  })
export class PageNameValidatorDirective {
    constructor(private validator: PageNameValidator) {}
  
    validate(control: AbstractControl) {
      this.validator.validate(control);
    }
  }

