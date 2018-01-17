import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AllUserData } from '../../shared/to/all-user-data';
import { Http } from '@angular/http';

@Injectable()
export class ThreadsService {

  constructor() { }

  loadUserThreads(): Observable<AllUserData> {

  }

}
