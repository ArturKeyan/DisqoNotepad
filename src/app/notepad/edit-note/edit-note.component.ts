import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.less']
})
export class EditNoteComponent implements OnInit {
  private noteForm: FormGroup;

  @Output() deleteNote = new EventEmitter<Note>();
  @Output() updateNote = new EventEmitter<{ note: Note, title: string }>();
  @Input() note: Note;
  @Input() showDeleteButton: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: new FormControl(this.note.title, {validators: Validators.required, updateOn: 'blur'}),
      note: new FormControl(this.note.note, {validators: Validators.required, updateOn: 'blur'})
    });

    this.onChanges();
  }

  onDelete() {
    this.deleteNote.emit(this.note);
  }

  onChanges(): void {
    this.noteForm.valueChanges.subscribe(val => {
      const note: Note = {
        title: val.title,
        note: val.note,
      };
      this.updateNote.emit({note, title: this.note.title});
    });
  }
}
