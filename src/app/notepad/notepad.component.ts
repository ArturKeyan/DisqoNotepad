import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { NotepadHttpService } from '../services/http/notepad-http.service';
import { Notepad } from '../models/notepad.model';
import { Note } from '../models/note.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.less'],
  providers: [ NotepadHttpService ]
})
export class NotepadComponent implements OnInit, OnDestroy {
  public notepad: Notepad = {
    id: null,
    notes: [],
    title: '',
  };

  public isTitleUnique = true;
  private notepadForm: FormGroup;

  private subscription;

  constructor(private notepadHttpService: NotepadHttpService, private fb: FormBuilder) { }

  ngOnInit() {
    const loadJson = this.notepadHttpService.getJson();

    this.subscription = loadJson.subscribe((res) => {
        const notes: Note[] = [];
        this.notepad = (JSON.parse(res.files['notepads.json'].content)).notepad as Notepad;
        this.notepadForm = this.fb.group({
          title: new FormControl(this.notepad.title, Validators.required)
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.notepad.title = this.notepadForm.get('title').value;
    this.notepadHttpService.save(this.notepad).subscribe(res => {
    });
  }

  public addNote(note: Note): void {
    const sameNameNotes = this.notepad.notes.filter((n) => note.title === n.title);
    if (sameNameNotes.length > 0) {
      console.error('note title must be unique');
    } else if (sameNameNotes.length === 0) {
      this.notepad.notes.push(note);
    }
  }

  public deleteNote(note: Note): void {
    this.notepad.notes = this.notepad.notes.filter(n => n.title !== note.title);
  }

  public updateNote({note, title}: {note: Note, title: string}): void {
    const sameNameNotes = this.notepad.notes.filter((n) => note.title === n.title);
    if (sameNameNotes.length > 0) {
      this.isTitleUnique = false;
      console.error('note title must be unique');
    } else if (sameNameNotes.length === 0) {
      this.isTitleUnique = true;
      this.notepad.notes.forEach((n, i) => {
        if (title === n.title) {
          this.notepad.notes[i].title = note.title;
          this.notepad.notes[i].note = note.note;
        }
      });
    }
  }
}
