import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEduacationComponent } from './my-eduacation.component';

describe('MyEduacationComponent', () => {
  let component: MyEduacationComponent;
  let fixture: ComponentFixture<MyEduacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEduacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEduacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
