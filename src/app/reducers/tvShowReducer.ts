import { handleActions, Action } from "redux-actions";
import { TV_SHOW_LIST, TV_SHOW_DETAILED_LIST, SEARCH_TV_SHOW } from "../constant";
import { TvShowState, TvShowProps, tvShowInitialState } from "../models/tvShowmodel"

export default handleActions<TvShowState, TvShowProps>(
  {
    // search show
    [SEARCH_TV_SHOW]: (
      state: TvShowState,
      actions: Action<TvShowState>
    ): TvShowState => {
      return {
        ...state,
        searchlist: actions.payload!.searchlist,
      };
    },
    // list show
    [TV_SHOW_LIST]: (
      state: TvShowState,
      actions: Action<TvShowState>
    ): TvShowState => {
      return {
        ...state,
        tvshowlist: actions.payload!.tvshowlist,
      };
    },
    //  detailed show
    [TV_SHOW_DETAILED_LIST]: (
      state: TvShowState,
      actions: Action<TvShowState>
    ): TvShowState => {
      return {
        ...state,
        tvshowdetailedlist: actions.payload!.tvshowdetailedlist,
      };
    },
  },
  tvShowInitialState
);