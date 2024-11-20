import axios from "axios";

const axiosUsers = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
});

export default axiosUsers;