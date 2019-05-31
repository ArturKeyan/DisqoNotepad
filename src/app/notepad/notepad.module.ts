import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotepadComponent } from './notepad.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { AddNotepadComponent } from './add-notepad/add-notepad.component';

@NgModule({
  declarations: [NotepadComponent, NoteComponent, AddNoteComponent, AddNotepadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NotepadModule { }
