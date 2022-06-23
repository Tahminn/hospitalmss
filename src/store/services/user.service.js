import axios from "axios";
import authHeader from "./auth-header";
import api from "./api.json"

const getDoctorsBoard = () => {

  const config = {
    headers: authHeader()
  };
  return axios
    .get(`${api.serverNameForDoctors}/get-all`,
    config
   )
};


const getNursesBoard = () => {
  const config = {
    headers: authHeader()
  };
  return axios
    .get(`${api.serverNameForNurses}/get-all`,
    config
   )
};


const getReceptionistsBoard = () => {
  const config = {
    headers: authHeader()
  };
  return axios
    .get(`${api.serverNameForReceptionists}/get-all`,
    config
   )
};

const getPatientsBoard = () => {
  const config = {
    headers: authHeader()
  };
  return axios
    .post(`${api.serverNameForPatients}/get-all`,
    {},
    config
   )
};

const deleteUser = (id) => {
  const config = {
    headers: authHeader()
  };
  return axios
    .delete(`${api.serverNameForDoctors}/delete/${id}`,
    config
    )
}

const updateUser = (id, input) => {
  const config = {
    headers: authHeader()
  };
  return axios
    .put(`${api.serverNameForDoctors}/put/${id}`,
    {input},
    config
    )
}


// const login = (email, password) => {
//   return axios
//     .post(`${serverApi.serverNameForAccount}/login`, {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data) {
//         console.log(response.data)
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };
const userService = {
    getPatientsBoard,
    getDoctorsBoard,
    getNursesBoard,
    getReceptionistsBoard,
    deleteUser,
    updateUser
};
export default userService