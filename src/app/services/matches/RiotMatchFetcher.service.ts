import Match from '../../models/Match'
import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { MatchFetcher, MatchFetcherError } from './MatchFetcher.service'
import { ChampionFetcher } from '../champions/ChampionFetcher.service';
import { HttpClient } from '@angular/common/http';
import { Champion, PerformanceStats, Team, TeamPerformance } from '../../models';
import { environment } from '../../../environments/environment';

type BlueTeamPerformance = TeamPerformance;
type RedTeamPerformance = TeamPerformance;
enum TeamID{ BLUE = 100, RED = 200 };
enum TeamState{ WIN = 'Win', FAIL= 'Fail' };

@Injectable({
    providedIn: ControlModule,
})
export default class RiotMatchFetcher implements MatchFetcher{
    constructor(
        private championFetcher: ChampionFetcher,
        private http: HttpClient
    ){}

    async fetch(id: number): Promise<Match> {
        try{
            const match: MatchDTO = await this.http.get(`/lol/match/v4/matches/${id}?api_key=${environment.RIOT_API_KEY}`).toPromise() as MatchDTO;
            const performances: [BlueTeamPerformance, RedTeamPerformance] = await this.getTeamPerformances(match);
            const minutesPlayed: number = Math.round(match.gameDuration % 60); //game duration is given in seconds
            const date: Date = new Date(match.gameCreation);
            return new Match(match.gameId, performances[0], performances[1], minutesPlayed, date);
        } catch(error) {
            console.error(error);
            throw new Error(MatchFetcherError.FETCH_ERROR);
        }
    }

    private async getTeamPerformances(match: MatchDTO): Promise<[RedTeamPerformance, BlueTeamPerformance]>{
        const firstTeamId: TeamID = match.teams[0].teamId;
        const secondTeamId: TeamID = match.teams[1].teamId;
        const firstTeamPerformance: TeamPerformance = await this.getTeamPerformance(match, firstTeamId);
        const secondTeamPerformance: TeamPerformance = await this.getTeamPerformance(match, secondTeamId);
        if(firstTeamId === TeamID.RED && secondTeamId === TeamID.BLUE)
            return [firstTeamPerformance, secondTeamPerformance];
        else
            return [secondTeamPerformance, firstTeamPerformance];
    }

    private async getTeamPerformance(match: MatchDTO, teamId: TeamID): Promise<TeamPerformance> {
        const team: TeamStatsDTO = match.teams.find((team) => { return team.teamId === teamId; });
        const playerPerformances: PerformanceStats[] = await this.getPlayerPerformances(match, teamId);
        const won: boolean = (team.win === TeamState.WIN);
        const bans: Champion[] = await this.getTeamBans(team);

        return new TeamPerformance(
            null, //team id unavailable
            null, //team name unavailable
            bans,
            won,
            team.dragonKills,
            team.riftHeraldKills,
            team.baronKills,
            team.towerKills,
            playerPerformances
        );
    }

    private async getTeamBans(team: TeamStatsDTO): Promise<Champion[]> {
        const bans: Champion[] = [];
        team.bans.forEach(async (ban) => {
            const bannedChampion: Champion = await this.championFetcher.fetch(ban.championId);
            bans.push(bannedChampion);
        });
        return bans;
    }

    private async getPlayerPerformances(match: MatchDTO, teamId: TeamID): Promise<PerformanceStats[]>{
        const minutesPlayed: number = Math.round(match.gameDuration % 60); //game duration is given in seconds
        const participants: ParticipantDTO[] = match.participants;
        const stats: PerformanceStats[] = [];
        for(let i = 0; i < participants.length; i++){
            const champion: Champion = await this.championFetcher.fetch(participants[i].championId);
            if(participants[i].teamId === teamId){
                stats.push(new PerformanceStats(
                    participants[i].stats.assists,
                    participants[i].stats.deaths,
                    participants[i].stats.totalDamageDealtToChampions,
                    participants[i].stats.damageDealtToObjectives,
                    participants[i].stats.totalDamageTaken,
                    participants[i].stats.goldEarned,
                    participants[i].stats.kills,
                    participants[i].stats.totalMinionsKilled,
                    minutesPlayed,
                    participants[i].stats.visionScore,
                    participants[i].stats.timeCCingOthers,
                    null, //player identity unavailable
                    champion,
                    participants[i].stats.largestMultiKill,
                    participants[i].stats.largestKillingSpree,
                    participants[i].stats.firstBloodKill,
                    participants[i].stats.firstTowerKill,
                    participants[i].stats.win
                ));
            }
        }
        return stats;
    }
}

interface TeamBansDTO {
    championId: number;
    pickTurn: number;
}

interface TeamStatsDTO {
    towerKills: number;
    riftHeraldKills: number;
    firstBlood: boolean;
    inhibitorKills: number;
    bans: TeamBansDTO[];
    firstBaron: boolean;
    firstDragon: boolean;
    dominionVictoryScore: number;
    dragonKills: number;
    baronKills: number;
    firstInhibitor: boolean;
    firstTower: boolean;
    vilemawKills: number;
    firstRiftHerald: boolean;
    teamId: TeamID;
    win: TeamState;
}

interface ParticipantStatsDTO {
    participantId: number;
    win: boolean;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    kills: number;
    deaths: number;
    assists: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    killingSprees: number;
    longestTimeSpentLiving: number;
    doubleKills: number;
    tripleKills: number;
    quadraKills: number;
    pentaKills: number;
    unrealKills: number;
    totalDamageDealt: number;
    magicDamageDealt: number;
    physicalDamageDealt: number;
    trueDamageDealt: number;
    largestCriticalStrike: number;
    totalDamageDealtToChampions: number;
    magicDamageDealtToChampions: number;
    physicalDamageDealtToChampions: number;
    trueDamageDealtToChampions: number;
    totalHeal: number;
    totalUnitsHealed: number;
    damageSelfMitigated: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    visionScore: number;
    timeCCingOthers: number;
    totalDamageTaken: number;
    magicalDamageTaken: number;
    physicalDamageTaken: number;
    trueDamageTaken: number;
    goldEarned: number;
    goldSpent: number;
    turretKills: number;
    inhibitorKills: number;
    totalMinionsKilled: number;
    neutralMinionsKilled: number;
    neutralMinionsKilledTeamJungle: number;
    neutralMinionsKilledEnemyJungle: number;
    totalTimeCrowdControlDealt: number;
    champLevel: number;
    visionWardsBoughtInGame: number;
    sightWardsBoughtInGame: number;
    wardsPlaced: number;
    wardsKilled: number;
    firstBloodKill: boolean;
    firstBloodAssist: boolean;
    firstTowerKill: boolean;
    firstTowerAssist: boolean;
    firstInhibitorKill: boolean;
    firstInhibitorAssist: boolean;
    combatPlayerScore: number;
    objectivePlayerScore: number;
    totalPlayerScore: number;
    totalScoreRank: number;
    playerScore0: number;
    playerScore1: number;
    playerScore2: number;
    playerScore3: number;
    playerScore4: number;
    playerScore5: number;
    playerScore6: number;
    playerScore7: number;
    playerScore8: number;
    playerScore9: number;
    perk0: number;
    perk0Var1: number;
    perk0Var2: number;
    perk0Var3: number;
    perk1: number;
    perk1Var1: number;
    perk1Var2: number;
    perk1Var3: number;
    perk2: number;
    perk2Var1: number;
    perk2Var2: number;
    perk2Var3: number;
    perk3: number;
    perk3Var1: number;
    perk3Var2: number;
    perk3Var3: number;
    perk4: number;
    perk4Var1: number;
    perk4Var2: number;
    perk4Var3: number;
    perk5: number;
    perk5Var1: number;
    perk5Var2: number;
    perk5Var3: number;
    perkPrimaryStyle: number;
    perkSubStyle: number;
    statPerk0: number;
    statPerk1: number;
    statPerk2: number;
}

interface ParticipantDTO {
    participantId: number;
    championId: number;
    stats: ParticipantStatsDTO;
    teamId: number;
    spell1Id: number;
    spell2Id: number;
}

interface PlayerDTO {
    profileIcon: number;
    accountId: string;
    matchHistoryUri: string;
    currentAccountId: string;
    currentPlatformId: string;
    summonerName: string;
    summonerId: string;
    platformId: string;
}

interface ParticipantIdentityDTO {
    participantId: number;
    player: PlayerDTO;
}

interface MatchDTO {
    gameId: number;
    participantIdentities: ParticipantIdentityDTO[];
    queueId: number;
    gameType: string;
    gameDuration: number;
    teams: TeamStatsDTO[];
    platformId: string;
    gameCreation: number;
    seasonId: number;
    gameVersion: string;
    mapId: number;
    gameMode: string;
    participants: ParticipantDTO[];
}
