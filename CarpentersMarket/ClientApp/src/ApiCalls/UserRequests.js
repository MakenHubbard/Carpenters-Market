import axios from 'axios';

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('api/users')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};


export default { getAllUsers };
