export function createUser(userData) {
    return new Promise(async(resolve) => {
        const response = await fetch('http://localhost:5000/users/signup',{
            method : 'POST',
            body : JSON.stringify(userData),
            headers : {'content-type' : 'application/json'}
        })
        const data = await response.json();
        resolve({data});
    })
}