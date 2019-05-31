import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotepadComponent } from './add-notepad.component';

describe('AddNotepadComponent', () => {
  let component: AddNotepadComponent;
  let fixture: ComponentFixture<AddNotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
