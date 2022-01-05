import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepoStatComponent } from './repo-stat/repo-stat.component';

const routes: Routes = [
  {path:"repoStat/:id/:id2", component:RepoStatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
