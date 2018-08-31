import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data;
  book :any = {
    id:"",
    author:"",
    created:"",
    message:""
  }
  addBook(){
    this.commonService.addBook(this.book);
    this.clearForm()
  }

  getBooks(){
    this.commonService.getBooks().subscribe((response)=>{
      this.data = response;
    })
  }
  editBook(obj){
    this.book= obj;
    console.log(this.book)
  }
  deleteBook(book){
    console.log(book)
    this.commonService.deleteBook(book).subscribe((response)=>{
      console.log(response)
      this.getBooks()

    })
  }
  updateBook(){
    this.commonService.updatebook(this.book).subscribe((response)=>{
      console.log(response)
      this.getBooks();
      this.clearForm()
    })
  }
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getBooks()
  }
  clearForm(){
    this.book  = {
      id:"",
      author:"",
      created:"",
      message:""
    }
  }
}
