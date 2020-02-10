import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTokenComponent } from './approve-token.component';

describe('ApproveTokenComponent', () => {
  let component: ApproveTokenComponent;
  let fixture: ComponentFixture<ApproveTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
