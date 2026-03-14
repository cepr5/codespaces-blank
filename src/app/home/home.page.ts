import { Component } from '@angular/core';

interface Book {
  bookName: string
  authorName: string
  year: number
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myname: string = "Timonin"
  todo: string[] = ["Помыть кота", "Помыть собаку", "Помыть мышь"]
  books: Book[] = [{bookName: "JoJo", authorName: "JoJo", year: 10}]
  btnClick(){this.myname = this.myname + "!"}
}
