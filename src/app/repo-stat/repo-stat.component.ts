import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { contributorStats } from '../contributorStat';

export class Repos {
  id!: string;
  name!: string;
  html_url!: string;
  description!: string;
}

@Component({
  selector: 'app-repo-stat',
  templateUrl: './repo-stat.component.html',
  styleUrls: ['./repo-stat.component.css']
})

export class RepoStatComponent implements OnInit {

  userName!: string;
  repoName!: string;
  repoContrType : any;
  repoContrValue : any;
  baseURL: string = "https://api.github.com/";
  contributor!: contributorStats[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params.id;
      this.repoName = params.id2;
    })
    this.getStat();
    this.getLanguage();
  }

  public getStat(){
    return this.http.get<contributorStats[]>(this.baseURL + 'repos/' + this.userName +'/'+ this.repoName + '/stats/contributors')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.contributor = response;
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }

  public getLanguage(){
    return this.http.get(this.baseURL + 'repos/' + this.userName +'/'+ this.repoName + '/languages')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repoContrType = Object.keys(response);
          this.repoContrValue = Object.values(response);
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }
  
}
