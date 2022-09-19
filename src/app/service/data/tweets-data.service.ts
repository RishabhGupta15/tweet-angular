import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Tweets {
  constructor(public id: number, public loginId: string, public tweets: string, public date: Date) { }
}

export class Likes {
  constructor(public id: number, public likes: number) { }
}

export class Comments {
  constructor(public comment: string, public tweetId: number, public date: Date, public loginId: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class TweetsDataService {

  serviceUrl: string = "ec2-34-221-48-114.us-west-2.compute.amazonaws.com";

  constructor(private http: HttpClient) { }

  getAllTweets() {

    return this.http.get<Tweets[]>(`http://${this.serviceUrl}:8080/tweets/all`)

  }

  getTweet(id: number) {
    return this.http.get<Tweets>(`http://${this.serviceUrl}:8080/tweet/${id}`)
  }

  postTweets(loginId: String, tweets: Tweets) {
    return this.http.post(`http://${this.serviceUrl}:8080/tweets/${loginId}/add`, tweets);
  }

  getTweetsofUser(loginId: string) {

    return this.http.get<Tweets[]>(`http://${this.serviceUrl}:8080/tweets/${loginId}`)
  }

  deleteTweet(id: number) {
    return this.http.delete(`http://${this.serviceUrl}:8080/tweets/delete/${id}`)
  }

  updateTweet(id: number, tweet: Tweets) {
    return this.http.put(`http://${this.serviceUrl}:8080/tweets/update/${id}`, tweet)
  }

  getLikes(id: number) {
    return this.http.get<Likes>(`http://${this.serviceUrl}:8080/tweet/${id}/likes`)
  }
  updateLikes(id: number, likes: Likes, loginId: string) {
    return this.http.put(`http://${this.serviceUrl}:8080/tweet/${id}/likesUpdate/${loginId}`, likes)
  }

  getAllLikes() {
    return this.http.get<Likes[]>(`http://${this.serviceUrl}:8080/tweet/all/likes`)
  }

  deleteLikes(id: number) {
    return this.http.delete(`http://${this.serviceUrl}:8080/tweet/${id}/delete`)
  }

  getComments(tweetId: number) {
    return this.http.get<Comments[]>(`http://${this.serviceUrl}:8080/comments/${tweetId}`)
  }

  postComment(tweetId: number, comment: Comments) {
    return this.http.post(`http://${this.serviceUrl}:8080/tweets/reply/${tweetId}`, comment)
  }

}
