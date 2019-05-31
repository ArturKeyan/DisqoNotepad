import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [NotepadComponent, NoteComponent],
  imports: [
    CommonModule
  ]
})
export class NotepadModule { }
