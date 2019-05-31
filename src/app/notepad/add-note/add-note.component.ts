import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.less']
})
export class AddNoteComponent implements OnInit {
  @Output() addNote = new EventEmitter<Note>();

  private noteForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      note: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const note: Note = {
        id: null,
        note: this.noteForm.get('note').value,
        title: this.noteForm.get('title').value
    };

    this.addNote.emit(note);

    this.noteForm.reset();
  }
}
