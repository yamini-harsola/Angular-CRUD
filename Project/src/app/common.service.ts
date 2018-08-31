import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  addBook(obj){
    obj.create = "2018-08-31T12:27:17.137+05:30";
    let url = "http://localhost:8585/RestDemo/rest/messages/";
    this._http.post(url,obj).subscribe((response)=>{
      console.log(response)
    })
  }

  getBooks(){
    let url = "http://localhost:8585/RestDemo/rest/messages/allmessages";
    return this._http.get(url)
  }
  deleteBook(book){
    let url = "http://localhost:8585/RestDemo/rest/messages/"+book.id
    return this._http.delete(url)
  }
  updatebook(obj){
    let url = "http://localhost:8585/RestDemo/rest/messages/";
    return this._http.put(url,obj)
  }
}
