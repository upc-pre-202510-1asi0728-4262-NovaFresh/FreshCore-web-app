import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected baseUrl = 'https://localhost:7196/api/v1';
}
