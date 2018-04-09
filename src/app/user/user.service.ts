import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  save(name: string, lastName: string, age : string): Observable<any>{
  	let paramsAtt = new HttpParams();
  	paramsAtt = paramsAtt.append('name', name);
  	paramsAtt = paramsAtt.append('lastName', lastName);
  	paramsAtt = paramsAtt.append('age', age);
  	return this.http.post('//localhost:8080/users/add', paramsAtt);
  }

  getUser(id: string): Observable<any>{
  	let paramsAtt = new HttpParams().set('id', id);
  	return this.http.get('//localhost:8080/users/id', {params: paramsAtt});
  }

  update(id: string, name: string, lastName: string, age : string): Observable<any>{
  	let paramsAtt = new HttpParams();
  	paramsAtt = paramsAtt.append('id', id);
  	paramsAtt = paramsAtt.append('name', name);
  	paramsAtt = paramsAtt.append('lastName', lastName);
  	paramsAtt = paramsAtt.append('age', age);
  	return this.http.put('//localhost:8080/users/update', paramsAtt);
  }

  delete(id: string): Observable<any>{
  	let paramsAtt = new HttpParams();
  	paramsAtt = paramsAtt.append('id', id);
  	return this.http.delete('//localhost:8080/users/delete', {params: paramsAtt});
  }
}
