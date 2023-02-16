import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // searchValue: string = '';
  // changeSearchValue(eventData: any) {
  //   console.log(eventData.target.value);
  // }

  searchText:string = '';

  @Output() SearchValueChanges :EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChanges() {
    this.SearchValueChanges.emit(this.searchText);
  }

}
