import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.less']
})
export class EditNoteComponent implements OnInit {
  private noteForm: FormGroup;

  @Output() deleteNote = new EventEmitter<Note>();
  @Input() note: Note;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.warn(this.note);

    this.noteForm = this.fb.group({
      title: new FormControl(this.note.title, Validators.required),
      note: new FormControl(this.note.note, Validators.required)
    });
  }

  onSubmit() {
    console.warn(this.noteForm.value);
  }

  onDelete() {
    this.deleteNote.emit(this.note);
  }
}
