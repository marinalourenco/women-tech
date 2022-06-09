import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:3333/"
})

export const getWomen = () => {
  return base.get("/women").then(res => res.data)
}