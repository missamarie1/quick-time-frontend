import axios from "axios";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const getAllUsers = (): Promise<any> => {
  return axios.get(`${baseUrl}`).then((res) => res.data);
};
