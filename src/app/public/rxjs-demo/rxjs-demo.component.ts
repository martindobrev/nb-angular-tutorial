import { Component, OnInit } from '@angular/core';
import { of, Observable, Observer, Subject, BehaviorSubject, fromEvent, AsyncSubject, ReplaySubject } from 'rxjs';

import { ajax } from 'rxjs/ajax'
import { map, filter, min, debounceTime, distinctUntilChanged, switchMap, retry, concat, concatMap } from 'rxjs/operators';
import { ArticleService } from '../../shared/article.service';
import { ArticleDTO } from './../../typescript-angular-client';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  arrayObservable = of(1, 2, 3, 4, 5, 6);
  
  stream1 = new Subject<string>();
  stream2 = new Subject<number>();

  stream1values: Array<string> = [];
  stream2values: Array<number> = [];

  stream2MinValue: number;
  stream1LastValue: string = '';
  article: ArticleDTO;

  userInput = {
    stream1: '',
    stream2: '',
    article: ''
  };

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    const customObservable = Observable.create((observer: Observer<string>) => {
      observer.next('1');
      observer.next('2');
      observer.complete();
    });

    customObservable.subscribe(value => {
      console.log('Array observable ' + value);
    },
    (err) => {},
    () => {
      console.log('Array observable completed!');
    });

    customObservable.subscribe(value => {
      console.log('Array observable ' + value);
    });

    this.stream1.subscribe((n) => {
      this.stream1values.push(n);
    });

    this.stream2.subscribe((n) => {
      this.stream2values.push(n);
    });

    this.stream2.pipe(
      filter( x => x > 0),
      min( (x, y) => { 
        if (x > y) {
          return 1;
        } else if (y > x) {
          return -1;
        } else {
          return 0;
        } 
      })
    ).subscribe((min) => {
      this.stream2MinValue = min;
    });
      
    const searchBox = document.getElementById('stream1');
    
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => ( e.target as any).value ),
      filter(text => text.length > 2),
      debounceTime(2000),
      distinctUntilChanged(),
      // switchMap(() => ajax('/api/endpoint'))
    );

    typeahead.subscribe(newValue => {
      this.stream1LastValue = newValue;
    });

    this.stream1.subscribe(value => {
      this.updateSubjects(value);
    });
  }

  sendValue1(val: string) {
    this.stream1.next(val);
    this.userInput.stream1 = '';
  }

  completeStream1() {
    this.stream1.complete();
  }

  completeStream2() {
    this.stream2.complete();
  }

  sendValue2(val: string) {
    console.log('Sending val2: ' + val);
    const intVal = parseInt(val);
    if (isNaN(intVal)) {
      console.warn('NOT A NUM');
      //this.stream2.error(`Stream 2 Error: Value ${val} is not an integer!`);
      return;
    }
    this.stream2.next(intVal);
    this.userInput.stream2 = '';
  }


  loadArticle() {
    this.articleService.loadArticleById(parseInt(this.userInput.article)).pipe(
      retry(3)
    ).subscribe(article => {
      this.article = article;
      console.log('ARTICLE LOADED SUCCESSFULLY!');
    }, err => {
      console.log('ERROR: ');
    });

  }

  behaviourSubject = new BehaviorSubject<string>(null);
  asyncSubject = new AsyncSubject<string>();
  replaySubject = new ReplaySubject<string>(5);
  private replaySubject$ = this.replaySubject.asObservable();

  asyncSubjectValues: Array<string> = [];
  behaviourSubjectValues: Array<string> = [];
  replaySubjectValues: Array<string> = [];

  private updateSubjects(value: string) {
    this.behaviourSubject.next(value);
    this.asyncSubject.next(value);
    this.replaySubject.next(value);
  }

  bindToSubjects() {
    this.asyncSubject.subscribe(value => {
      this.asyncSubjectValues.push(value);
    });

    this.behaviourSubject.subscribe(value => {
      this.behaviourSubjectValues.push(value);
    });

    this.replaySubject.subscribe(value => {
      this.replaySubjectValues.push(value);
    });
  }
}


class MyIntObserver implements Observer<number> {
  closed?: boolean; 
  
  constructor(private name: string) {}
  
  next(value: number): void {
    console.log(`Observer ${this.name}: value: ${value}`);
  }
  
  error(err: any) {
    console.warn(`Observer ${this.name}, ERROR: ${err}`);
  }

  complete() {

  }
}