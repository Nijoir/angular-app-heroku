import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmLoginComponent } from './fsm-login.component';

describe('FsmLoginComponent', () => {
  let component: FsmLoginComponent;
  let fixture: ComponentFixture<FsmLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsmLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
