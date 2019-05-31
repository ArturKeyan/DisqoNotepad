import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotepadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
