import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
export class Repos {
  id!: string;
  name!: string;
  description!: string;
  html_url!:string
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
 
  userName!: string;
  baseURL: string = "https://api.github.com/";
  repos!: Repos[];
 
  
  constructor(private http: HttpClient) {
  }
 
  ngOnInit() {
    this.getRepos()
  }
 
 
  public getRepos() {
 
    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repos = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        })
  }
}
 