import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTimelineComponent } from './events-timeline.component';

describe('EventsTimelineComponent', () => {
  let component: EventsTimelineComponent;
  let fixture: ComponentFixture<EventsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
