import axios from "axios";
 
const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL:  `${process.env.REACT_APP_API_URL}/api`
  // withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = (err) => {
  throw err;
};
 
const getServices = () => {
  return service.get("/service/list")
    .then((res) => res.data)
    .catch(errorHandler);
};
 
const uploadImage = (file) => {
  return service.post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};
 
const createService = (newService) => {
  return service.post("/services", newService)
    .then(res => res.data)
    .catch(errorHandler);
};
 
export default {
    service,
    getServices,
    uploadImage,
    createService,
};