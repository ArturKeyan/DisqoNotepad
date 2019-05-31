import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseHttpService {
    protected getHeaders(contentType?: string): HttpHeaders {
        const headers = new HttpHeaders()
        .set('Accept', contentType || 'application/json')
        .set('Content-Type', contentType || 'application/json')
        .set('Authorization', `token ${environment.token}`);
        return headers;
    }
}
