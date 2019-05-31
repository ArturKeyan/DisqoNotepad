import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-notepad',
  templateUrl: './add-notepad.component.html',
  styleUrls: ['./add-notepad.component.less']
})
export class AddNotepadComponent implements OnInit {
  private notepadForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.notepadForm = this.fb.group({
      title: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.warn(this.notepadForm.value);
  }

  onDelete() {
    console.log('delete');
  }
}
