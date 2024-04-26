import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../features/users/userSlice";

export function Authorize(token: string) {

  axios.defaults.headers.common["Authorization"] =
    `Bearer ${token}`;

  const dispatch = useDispatch();

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
      console.log(response);
    })
    .catch((e) => console.log(e));
}
