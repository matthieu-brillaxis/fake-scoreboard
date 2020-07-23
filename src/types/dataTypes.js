// @flow

export type LolPlayerChampion = {
  id: number,
  name: string,
  image_url: string | null,
}

export type LolPlayerItem = {
  id: number,
  name: string,
  type: 'item' | 'trinket',
}

export type LolPlayerSpell = {
  id: number,
  name: string,
}

export type LolTeamPlayer = {
  id: number,
  name: string,
  champion: LolPlayerChampion,
  level: number,
  kills: number,
  deaths: number,
  assists: number,
  hp: number,
  cs: number,
  items: (LolPlayerItem | null)[],
  summoner_spells: LolPlayerSpell[],
}

export type LolTeamStats = {
  name: string,
  acronym: string | null,
  drakes: number,
  gold: number,
  herald: number,
  id: number,
  inhibitors: number,
  kills: number,
  nashors: number,
  score: number,
  towers: number,
  logo: string,
  players: ({
    top: LolTeamPlayer,
    mid: LolTeamPlayer,
    jun: LolTeamPlayer,
    adc: LolTeamPlayer,
    sup: LolTeamPlayer,
  } | {})
}

export type LolFrame = {
  blue: LolTeamStats,
  red: LolTeamStats,
  paused: boolean,
  current_timestamp: number,
  game: {
    finished: boolean,
    id: number,
    winner_id: number | null,
  },
  match: {
    id: number,
  },
  tournament: {
    id: number,
  }
};

export type GoldsItemTypes = {
  type: string,
  name: string,
  data: Object,
}

export type GoldsTypes = GoldsItemTypes[];
