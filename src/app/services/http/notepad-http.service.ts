import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Notepad } from '../../models/notepad.model';
import { Note } from '../../models/note.model';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class NotepadHttpService extends BaseHttpService {
    constructor(
        private http: HttpClient) {
        super();
    }

    public getJson(): Observable<any> {
        return this.http.get<any>(`${environment.notepadUrl}?v=${Math.floor(Date.now() / 1000)}`);
    }

    public save(notepad: Notepad): Observable<object> {
        const gist = {
            description: 'disqo gist',
            files: {
                'notepads.json': {
                  filename: 'notepads.json',
                  content: JSON.stringify({notepad} )
                }
              },
          };

        return this.http.patch(environment.notepadUrl, gist, { headers: this.getHeaders() });
    }


}
