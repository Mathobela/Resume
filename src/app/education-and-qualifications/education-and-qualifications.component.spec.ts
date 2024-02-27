import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndQualificationsComponent } from './education-and-qualifications.component';

describe('EducationAndQualificationsComponent', () => {
  let component: EducationAndQualificationsComponent;
  let fixture: ComponentFixture<EducationAndQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndQualificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
