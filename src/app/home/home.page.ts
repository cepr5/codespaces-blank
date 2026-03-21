import { Component } from '@angular/core';
import {v4} from 'uuid';

class Book {
  id: string
  bookName: string
  authorName: string
  year: number|null
  constructor(bookName: string, authorName: string, year: number|null) {
        this.id = v4()
        this.bookName = bookName;
        this.authorName = authorName;
        this.year = year;
    }

  // bookName: string
  // authorName: string
  // year: number|null
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  bookname: string = ""
  authorName: string = ""
  year: number|null = null

  myname: string = "Timonin"
  todo: string[] = ["Помыть кота", "Помыть собаку", "Помыть мышь"]
  books: Book[] = [new Book("JoJo", "JoJo", 10)]
  btnClick(){this.books.push(new Book(this.bookname,this.authorName,this.year))}
  doubleBtnClick(){this.myname = "admin"}
  delete(id: string){
    this.books = this.books.filter((el) => el.id != id)
  }

  // newBook: Book = {
  // bookName: "",
  // authorName: "",
  // year: null}
}

var z;




