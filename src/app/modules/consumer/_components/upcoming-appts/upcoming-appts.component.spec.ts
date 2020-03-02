import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingApptsComponent } from './upcoming-appts.component';

describe('UpcomingApptsComponent', () => {
  let component: UpcomingApptsComponent;
  let fixture: ComponentFixture<UpcomingApptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingApptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
