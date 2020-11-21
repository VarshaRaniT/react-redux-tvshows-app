import Axios from "axios";
export const fetchTvShowList = (callback: any) => {
  let apiUrl = "http://api.tvmaze.com/shows"
  
  return Axios.get(apiUrl)
    .then((response: any) => {
      callback(response.data);
    })
    .catch(function(error: any) {
      console.log(error)
    });
};
