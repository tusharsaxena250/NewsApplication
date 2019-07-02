import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = '829ae42ecd7548d7925cac78c7c88542';
  constructor(private http:HttpClient) { }
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticleByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  getArticleByFilter(topics: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?q='+topics+'&apiKey='+this.api_key)
  }
  getArticleByDateFilter(d1: any, d2: any) {
    return this.http.get('https://newsapi.org/v2/top-headlines?from='+d1+'&to='+d2+'&apiKey='+this.api_key)
  }
}
