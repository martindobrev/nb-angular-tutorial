import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagelistComponent } from './pagelist.component';

describe('PagelistComponent', () => {
  let component: PagelistComponent;
  let fixture: ComponentFixture<PagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
