import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerTopBar } from './consumer-top-bar.component';

describe('TopBarComponent', () => {
  let component: ConsumerTopBar;
  let fixture: ComponentFixture<ConsumerTopBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerTopBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerTopBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
