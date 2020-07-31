import axios from "axios";

// const code = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJuYW1lIjoiVGlmZmFueXkiLCJpYXQiOjE1OTYyMTU0NjgsImV4cCI6MTU5NjQ3NDY2OH0.PS7ZA_r-ZSwvhqMav3d7OnmfRQ2q_MRLGYmbEXVzi74'
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://water-my-pants.herokuapp.com"
  });
};