import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotepadComponent } from './notepad.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [NotepadComponent, AddNoteComponent, EditNoteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NotepadModule { }
