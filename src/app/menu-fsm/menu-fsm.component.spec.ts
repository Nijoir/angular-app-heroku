import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFSMComponent } from './menu-fsm.component';

describe('MenuFSMComponent', () => {
  let component: MenuFSMComponent;
  let fixture: ComponentFixture<MenuFSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
