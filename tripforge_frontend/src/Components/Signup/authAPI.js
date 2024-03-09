import axios from "axios";

export function createUser(userData) {
    console.log("Inside create user",userData);
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:5000/users/signup', {
            method : "POST",
            body : JSON.stringify(userData),
            headers : {'Content-Type' : "application/json"}
        });

        const data = await response.json();
        resolve({data});
    })
}

export function fetchUser(id) {
    return new Promise(async (resolve) => {
        // const respone = await fetch('http://localhost:5000/user/',{id})
        // const formdata = new FormData();
        // formdata.append("id",id);
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        console.log(response);
    })
}