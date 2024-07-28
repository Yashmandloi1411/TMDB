import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTc1ZmM0OTJmMTNjNjlhMjRjZGYxNDE4YmYzN2I4NyIsIm5iZiI6MTcyMTM4MjcxMC40NTcwOTUsInN1YiI6IjY2OWEzMzVhODcyMjRkYzM1MGIxOWQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4P3p-Dr1Uuxz3gUST5fhLslKdenCoEW6cHg1j6R1dwc",
  },
});
export default instance;
