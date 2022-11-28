import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotePageComponent } from './update-note-page.component';

describe('UpdateNotePageComponent', () => {
  let component: UpdateNotePageComponent;
  let fixture: ComponentFixture<UpdateNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
