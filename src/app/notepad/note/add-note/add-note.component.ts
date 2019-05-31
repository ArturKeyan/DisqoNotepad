import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.less']
})
export class AddNoteComponent implements OnInit {
  private noteForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      note: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.warn(this.noteForm.value);
  }
}
