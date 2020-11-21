import Axios from "axios";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
export const fetchSearchTvShow = (callback: any, serachvalue: string) => {

  let apiUrl = `http://api.tvmaze.com/search/shows?q=${serachvalue}`
  return Axios.get(apiUrl)
    .then((response: any) => {

      if (response.data.length ===0) {
        Swal.fire({
          title: "No Data Found",
          text: "Search More Result",
        });
      }
      else
        callback(response.data);
    })
    .catch(function (error: any) {
      console.log(error)
    });
};
