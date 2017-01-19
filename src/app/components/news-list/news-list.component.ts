import { Component, OnInit } from '@angular/core';
import {News} from "../../models/News";
import {NewsService} from "../../services/News/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News[];
  isLoading: boolean;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.newsService.getNewsList().then(newsList => {
      this.isLoading = false;
      this.newsList = newsList;
    });
  }

}
