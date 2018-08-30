const ID = 570;
const steamID = '4E3975D14D9DE72A71130CDAB23471E0'
const api = {

    GetLeagueListing: `http://api.steampowered.com/IDOTA2Match_${ID}/GetLeagueListing/v1?key=${steamID}`,

    GetLiveLeagueGames : `http://api.steampowered.com/IDOTA2Match_${ID}/GetLiveLeagueGames/v1?key=${steamID}`,

    GetMatchDetails: `http://api.steampowered.com/IDOTA2Match_${ID}/GetMatchDetails/v1?key=${steamID}`,

    GetMatchHistory: `http://api.steampowered.com/IDOTA2Match_${ID}/GetMatchHistory/v001/?key=${steamID}`,

    GetMatchHistoryBySequenceNum: `http://api.steampowered.com/IDOTA2Match_${ID}/GetMatchHistoryBySequenceNum/v1?key=${steamID}`,

    GetScheduledLeagueGames: `http://api.steampowered.com/IDOTA2Match_${ID}/GetScheduledLeagueGames/v1?key=${steamID}`,

    GetTeamInfoByTeamID: `http://api.steampowered.com/IDOTA2Match_${ID}/GetTeamInfoByTeamID/v1?key=${steamID}`,

    GetTournamentPlayerStats: `http://api.steampowered.com/IDOTA2Match_${ID}/GetTournamentPlayerStats/v1?key=${steamID}`,

    GetTopLiveGame: ` http://api.steampowered.com/IDOTA2Match_${ID}/GetTopLiveGame/v1?key=${steamID}`,

    GetGameItems: `http://api.steampowered.com/IEconDOTA2_${ID}/GetGameItems/v1?key=${steamID}`,

    GetItemIconPath: `http://api.steampowered.com/IEconDOTA2_${ID}/GetItemIconPath/v1?key=${steamID}`,

    GetHeroes: `http://api.steampowered.com/IEconDOTA2_${ID}/GetHeroes/v1?key=${steamID}`,

    GetRarities: `http://api.steampowered.com/IEconDOTA2_${ID}/GetRarities/v1?key=${steamID}`,

    GetTournamentPrizePool: `http://api.steampowered.com/IEconDOTA2_${ID}/GetTournamentPrizePool/v1?key=${steamID}`,

    GetEventStatsForAccount: `http://api.steampowered.com/IEconDOTA2_${ID}/GetEventStatsForAccount/v1?key=${steamID}`,

}

export default api
