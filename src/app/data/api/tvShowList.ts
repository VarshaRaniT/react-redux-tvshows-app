import Axios from "axios";
export const fetchTvShowList = (callback: any) => {
  let config = {
    headers: {
      "content-type": "application/json",
    }
  };
  let apiUrl = "http://api.tvmaze.com/shows"
  
  return Axios.get(apiUrl, config)
    .then((response: any) => {
      callback(response.data);
    })
    .catch(function(error: any) {
      console.log(error)
    });
};
