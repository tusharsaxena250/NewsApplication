import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { MatDatepicker } from '@angular/material';
import { FormControl, Validators} from '@angular/forms';
import { formatDate, DatePipe } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  topic = new FormControl();
  mD1 = new FormControl();
  mD2 = new FormControl();
  country = new FormControl();
  // pipe = new DatePipe('en-US');
  // mD11 = this.pipe.transform(this.mD1, 'yyyy-MM-dd')
  // mD11 = formatDate(this.mD1, 'yyyy-MM-dd', 'en-US');

  // dateFilterUpdate(a, b) {
  //   console.log(a);
  //   console.log(b);
  //   this.newsapi.getArticleByDateFilter(a, b).subscribe(data => this.mArticles = data['articles']);
  // }

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
  updatePage(a) {
    this.newsapi.getArticleByFilter(a).subscribe(data => this.mArticles = data['articles']);
    console.log("Done");
  };
  updatePagebyDate(a, b) {
    this.newsapi.getArticleByDateFilter(a, b).subscribe(data => this.mArticles = data['articles']);
  }
}
