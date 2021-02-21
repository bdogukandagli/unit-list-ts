export interface IUnit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost?: ICosts | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight?: number;
  hit_points?: number;
  range?: number | string;
  attack?: number;
  armor?: string;
  accuracy?: string;
  attack_bonus?: string[];
  armor_bonus?: string[];
  blast_radius?: number;
}

export interface IFilter {
  food: IWood;
  wood: IWood;
  gold: IGold;
  age: IAge;
}

export interface IWood {
  minWood: number;
  minWoodText: string;
  maxWood: number;
  maxWoodText: string;
}

export interface IFood {
  minFood: number;
  minFoodText: string;
  maxFood: number;
  maxFoodText: string;
}

export interface IGold {
  minGold: number;
  minGoldText: string;
  maxGold: number;
  maxGoldText: string;
}

export interface IAge {
  id: number;
  value: string;
}

export interface ICosts {
  Wood?: number;
  Food?: number;
  Gold?: number;
}
