import { Injectable } from '@angular/core';
import {News} from "../../models/News";
import {NEWS} from "../../constant";

@Injectable()
export class NewsService {

  newsCache: News[] = [];
  cacheDirty: boolean;

  constructor() {
    this.cacheDirty = true;
  }

  getNewsList(): Promise<News[]> {
    if (this.newsCache != null && !this.cacheDirty ){
      return Promise.resolve(this.newsCache);
    } else {
      return this.refreshCache();
    }
  }

  refreshCache(): Promise<News[]> {
    this.newsCache = NEWS;
    this.cacheDirty = false;
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(NEWS), 2000);
    });
  }

  getNews(id: number): Promise<News> {
    return this.getNewsList()
      .then(events => events.find(hero => hero.id === id));
  }

}
