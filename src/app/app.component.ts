import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SentimentAnalysis';
  sentiment : any;
  color: string | any = "green";

  constructor(private httpClient : HttpClient){

  }
  ngOnInit(): void{

  }
  async analyzer(sentence:string) {
    let sentimentJSON: any;
    sentimentJSON = await this.httpClient.get('http://127.0.0.1:5002/sentiment-analysis/' + sentence).toPromise() as JSON
    this.sentiment = sentimentJSON["sentiment"]

    if (this.sentiment == "Positive") {
      this.color = "green";
    }
    else if (this.sentiment == "Negative") {
      this.color = "red";
    }
    else {
      this.sentiment = "Neutral"
      this.color = "grey";
    }
  }
}
