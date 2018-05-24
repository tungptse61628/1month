import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookDetailComponent } from './facebook-detail.component';

describe('FacebookDetailComponent', () => {
  let component: FacebookDetailComponent;
  let fixture: ComponentFixture<FacebookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
