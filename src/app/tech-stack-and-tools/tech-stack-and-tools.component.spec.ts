import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackAndToolsComponent } from './tech-stack-and-tools.component';

describe('TechStackAndToolsComponent', () => {
  let component: TechStackAndToolsComponent;
  let fixture: ComponentFixture<TechStackAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackAndToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
