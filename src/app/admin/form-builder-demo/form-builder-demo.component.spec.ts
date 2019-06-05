import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderDemoComponent } from './form-builder-demo.component';

describe('FormBuilderDemoComponent', () => {
  let component: FormBuilderDemoComponent;
  let fixture: ComponentFixture<FormBuilderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
