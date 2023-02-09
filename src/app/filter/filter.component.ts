import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() All:number = 0;
  @Input() PriceLess:number = 0;
  @Input() PriceMore:number = 0;

  SelectedRadioButtonValue:string = 'All';

  @Output()
  filterRadioButtonSelectionChange:EventEmitter<string> = new EventEmitter<string>;

  RadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChange.emit(this.SelectedRadioButtonValue)
    // console.log(this.SelectedRadioButtonValue)
  }

}
