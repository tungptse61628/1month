import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaignDetailComponent } from './new-campaign-detail.component';

describe('NewCampaignComponent', () => {
  let component: NewCampaignDetailComponent;
  let fixture: ComponentFixture<NewCampaignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampaignDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
