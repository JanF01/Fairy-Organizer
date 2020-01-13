import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrganizerComponent } from './new-organizer.component';

describe('NewOrganizerComponent', () => {
  let component: NewOrganizerComponent;
  let fixture: ComponentFixture<NewOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
