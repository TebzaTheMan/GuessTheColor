export interface IAction<T> {
  type: string;
  storedState?: T;
}

export interface IHighscoreState {
  current: number;
}
export interface IHighscoreAction extends IAction<IHighscoreState> {
  score?: number;
  storedState?: T;
}