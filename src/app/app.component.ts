import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  startDate = this.minDate;
  stopDate = this.maxDate;
  countryValue: String;
  topicValue: String;

  uodatePage = function() {
    
  };

  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(private newsapi:NewsApiService) {
    console.log('App Component Constructor Called!');
  }
  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }
  searchArticles(source) {
    console.log("Selected source is: "+source);
    this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
