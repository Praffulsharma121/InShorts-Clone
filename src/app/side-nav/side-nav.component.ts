import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() categoryEmit = new EventEmitter();
  menu: boolean = true;
  tab: string = 'menu';
  tabType: string = 'Menu';
  categories: string[] = ['All News', 'India', 'Business', 'Sports', 'World', 'Politics', 'Technology',
                         'Startup', 'Entertainment', 'Miscellaneous', 'Hatke', 'Science', 'Automobile'];

  categoriesType: string[] = ['all', 'national', 'business', 'sports', 'world', 'politics', 'technology',
                              'startup', 'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile'];
  openIt: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeMenu(){
    if(this.menu){
      this.menu = false;
      this.tab = 'close';
      this.tabType = 'Close';
    }else{
      this.menu = true;
      this.tab = 'menu';
      this.tabType = 'Menu';
    }
  }

  changeCategory(index: number){
    this.categoryEmit.emit(this.categoriesType[index]);
  }


}
