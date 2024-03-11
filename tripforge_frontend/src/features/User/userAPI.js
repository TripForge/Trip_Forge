export function createUserInfo(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:5000/userInfo/add-info", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      console.log('data is ', data);
      resolve({ data });
    });
  }