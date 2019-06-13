import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPrimengComponent } from './page-edit-primeng.component';

describe('PageEditPrimengComponent', () => {
  let component: PageEditPrimengComponent;
  let fixture: ComponentFixture<PageEditPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
