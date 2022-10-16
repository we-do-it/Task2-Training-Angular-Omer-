import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  inputValue:string = '';

  @Output() inputOnchangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  inputOnchange(){
    this.inputOnchangeEvent.emit(this.inputValue);
  }

}