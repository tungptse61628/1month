import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcDetailComponent } from './tvc-detail.component';

describe('TvcDetailComponent', () => {
  let component: TvcDetailComponent;
  let fixture: ComponentFixture<TvcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
