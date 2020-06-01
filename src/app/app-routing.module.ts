import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReportGameComponent } from './report-game/report-game.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'report-game', component: ReportGameComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'unauthorized', component: UnauthorizedComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
