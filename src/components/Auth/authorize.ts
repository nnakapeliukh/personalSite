import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../features/users/userSlice";

export function Authorize() {
  const dispatch = useDispatch();
  const token = localStorage.token;
  if (token){
    axios.defaults.headers.common["Authorization"] =
    `Bearer ${token}`;


  axios
    .get("http://localhost:3060/api/users/")
    .then((response) => {
      dispatch(
        setUserData({
          userName: response.data.userName,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          city: response.data.city,
        })
      );
    })
    .catch(() => {
      // silent catch on auth fail
    }
    );
  }
 
}
