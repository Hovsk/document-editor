import API from "../api";

class Auth {
    register(data, cb) {
        API.post('users', data)
            .then(res => {
                if(res.data){
                    this.login(data, cb);
                } else {
                    console.log('Registration problem!!')
                }
            })
            .catch(res => {
                alert('Registration problem: Its because of CORS , you cen just skip this step and go to login directly!!')
            })
    }

    login(data, cb) {
        API.post('auth/login', data)
            .then(res => {
                res.data && res.data.token && sessionStorage.setItem('userData', JSON.stringify(res.data));
                cb()
            })
            .catch(res => {
                alert('server error!')
            })
    }

    logout(cb) {
        sessionStorage.removeItem('userData');
        cb();
    }

    isAuthenticated() {
        console.log(sessionStorage.getItem('userData'));
        return !!sessionStorage.getItem('userData');
    }
}

export default new Auth();
