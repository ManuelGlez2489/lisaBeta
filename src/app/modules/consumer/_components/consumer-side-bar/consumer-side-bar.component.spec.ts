import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSideBarComponent } from './consumer-side-bar.component';

describe('ConsumerSideBarComponent', () => {
  let component: ConsumerSideBarComponent;
  let fixture: ComponentFixture<ConsumerSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
