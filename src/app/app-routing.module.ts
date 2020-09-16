import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReportGameComponent } from './pages/report-game/report-game.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { TournamentComponent } from './pages/tournament/tournament.component';


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
    path: 'tournaments', component: TournamentsComponent
  },
  {
    path: 'tournaments/:tournamentId', component: TournamentComponent
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
