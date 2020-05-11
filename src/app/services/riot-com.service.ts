import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as apiModel from "../models/api-model";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RiotComService {

  constructor(private http: HttpClient) { }

  async consultMatch (apiKey:string, matchId:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get("/lol/match/v4/matches/"+matchId+"?api_key="+apiKey).subscribe(data => {
        let match = data as apiModel.Match
        if(!match.teams){
          reject(match)
        }
        let result = {team1: {name: "Team1 PlaceHolder", playerStats: []}, team2: {name: "Team2 PlaceHolder", playerStats: []}}
        for (let i = 0; i < 10; i++) {
          const stats = match.participants[i].stats
          const player = {
            playerName: match.participantIdentities[i].player.summonerName,
            kills: stats.kills,
            deaths: stats.deaths,
            assists: stats.assists,
            minions: stats.totalMinionsKilled + stats.neutralMinionsKilled,
            gold: stats.goldEarned
          };
          if(i < 5){
            result.team1.playerStats.push(player)
          } else {
            result.team2.playerStats.push(player)
          }
        }
        resolve(result);
      })
    })

  }
}
