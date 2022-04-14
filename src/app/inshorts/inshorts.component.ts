import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shorts } from '../models/shorts.model';

@Component({
  selector: 'app-inshorts',
  templateUrl: './inshorts.component.html',
  styleUrls: ['./inshorts.component.scss']
})
export class InshortsComponent implements OnInit {

  isLoading: boolean = false;
  info: any;
  shorts: shorts[] = [];
  @Input() categoryType!: string;
  categoriesType: string[] = ['all', 'national', 'business', 'sports', 'world', 'politics', 'technology',
                              'startup', 'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile'];
  category: string = '';

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.isLoading = true;
    this.http.get('https://inshortsapi.vercel.app/news?category=all').subscribe(shorts => {
      this.info = shorts;
    
      for(const key in this.info.data){
          this.shorts.push(this.info.data[key])
      }
      this.returnDomainName();
      this.isLoading = false;
      
    });
  }

  categoryTypeSet(category: any){
    this.category = category;
    this.isLoading = true;
    this.info = null;
    this.shorts = [];
    this.http.get(`https://inshortsapi.vercel.app/news?category=${category}`).subscribe(shorts => {
      this.info = shorts;
    
      for(const key in this.info.data){
          this.shorts.push(this.info.data[key])
      }
      // this.returnDomainName();
      this.isLoading = false;
      
    });
    
  }

  onSelectingShort(short: any){
    console.log(short);
    
  }

  loadMore(){
    let index = 0;
    console.log('working');
    
    // for(let i=0;i<this.categoriesType.length;++i){
    //   if(this.category == this.categoriesType[i] && i!=this.categoriesType.length-1){
    //     index = i;
    //     break;
    //   }
    // }

    // this.http.get(`https://inshortsapi.vercel.app/news?category=${this.categoriesType[index+1]}`).subscribe(shorts => {
    //   this.info = shorts;
    
    //   for(const key in this.info.data){
    //       this.shorts.push(this.info.data[key])
    //   }
    //   // this.returnDomainName();
    //   this.isLoading = false;
      
    // });

  }

  returnDomainName(){
      //this.shorts[i].readMoreUrl;
    for(let i=0;i<shorts.length;++i){
        
      if(this.shorts[i].readMoreUrl){
        const url = this.shorts[i].readMoreUrl;
        let domain = (new URL(url));
        let domainName = domain.hostname.replace('www.','').replace('.com','').replace('.in','');
        this.shorts[i].domainName = domainName;
      }
    }
  }


}
