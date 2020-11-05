
import { createAction } from "redux-actions";
import { TV_SHOW_LIST, TV_SHOW_DETAILED_LIST, SEARCH_TV_SHOW } from "../constant";

export const getTvShowList = createAction(TV_SHOW_LIST, (tvshowlist: any) => ({
  tvshowlist
}));
export const getTvShowDetailed = createAction(TV_SHOW_DETAILED_LIST, (tvshowdetailedlist: any) => ({
  tvshowdetailedlist
}));
export const getSearchTvShow = createAction(SEARCH_TV_SHOW, (searchlist: any) => ({
  searchlist
}));
