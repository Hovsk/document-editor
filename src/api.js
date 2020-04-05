import Axios from 'axios';
import auth from "./components/auth";

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
const  authMethod = () => {
    let userData = sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData'));
    return userData && Object.keys(userData).length > 0  ? `Bearer ${userData.token}`: ''
};

export default Axios.create({
    baseURL: `http://localhost/`,
    transformRequest: [function (data, headers) {
        let authstr = authMethod();
        if(authstr.length > 0) {
            headers['Authorization'] = authstr;
        }
        return JSON.stringify(data);
    }],
    headers: {
        'Content-Type': 'application/json'
    }
});