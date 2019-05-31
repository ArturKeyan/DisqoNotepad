import { HttpHeaders } from '@angular/common/http';

export class BaseHttpService {
    protected getHeaders(contentType?: string): HttpHeaders {
        const headers = new HttpHeaders()
        .set('Accept', contentType || 'application/json')
        .set('Content-Type', contentType || 'application/json')
        .set('X-OAuth-Scopes', 'gist')
        .set('X-Accepted-OAuth-Scopes', 'gist')
        .set('Authorization', 'token 6fb28c8cdc01fb33677bf55aefce476b712eca6c');

        console.log(headers);

        return headers;
    }
}
