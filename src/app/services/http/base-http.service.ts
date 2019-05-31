import { HttpHeaders } from '@angular/common/http';

export class BaseHttpService {
    protected getHeaders(contentType?: string): HttpHeaders {
        const headers = new HttpHeaders();
        headers.append('Accept', contentType || 'application/json');
        headers.append('Content-Type', contentType || 'application/json');
        headers.append('ACCESS_TOKEN', '');
        return headers;
    }
}
