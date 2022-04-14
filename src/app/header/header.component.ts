import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() category = new EventEmitter();
  @Input() type: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  emitCategory(value: any){
    this.category.emit(value);
  }

}
