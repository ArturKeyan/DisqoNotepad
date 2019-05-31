import { Component, OnInit, OnDestroy } from '@angular/core';

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
  public notepad: Notepad;

  private notepadForm: FormGroup;

  private subscription;

  constructor(private notepadHttpService: NotepadHttpService, private fb: FormBuilder) { }

  ngOnInit() {
    const loadJson = this.notepadHttpService.getJson();

    this.notepadForm = this.fb.group({
      title: new FormControl(null, Validators.required)
    });

    this.subscription = loadJson.subscribe((res) => {
        const notes: Note[] = [];
        this.notepad = (JSON.parse(res.files["notepads.json"].content)).notepads[0] as Notepad;
        console.warn(this.notepad);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.warn(this.notepadForm.value);
  }

  onDelete() {
    console.log('delete');
  }
}
