import Axios from "axios";
export const fetchDetailedTvShow = (callback: any) => {
  let id = window.location.pathname.split('/')[2];
  let apiUrl = `http://api.tvmaze.com/shows/${id}`
  return Axios.get(apiUrl)
    .then((response: any) => {
      callback(response.data);
    })
    .catch(function(error: any) {
      console.log(error)
    });
};
