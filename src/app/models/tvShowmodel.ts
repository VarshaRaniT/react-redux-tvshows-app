export interface TvShowState {
  tvshowlist: any,
  tvshowdetailedlist: any,
  searchlist:any
}
export interface TvShowProps extends TvShowState {
  getTvShowList: (tvshowlist: any) => void;
  getTvShowDetailed: (tvshowdetailedlist: any) => void;
  getSearchTvShow: (searchlist: any) => void;
}
export const tvShowInitialState: TvShowState = {
  tvshowlist: [],
  tvshowdetailedlist: [],
  searchlist:[]
};
