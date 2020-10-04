import axios from 'axios'

export const getData = (data) => {
    return{
        type: 'SUCCESS',
        payload: data
    }
};


export const fetchUsers = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(getData(res.data));
        })
        .catch(err => {
            // console.log(err);
        })
};