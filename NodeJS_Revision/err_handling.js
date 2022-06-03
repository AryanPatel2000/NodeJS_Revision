
let authorized = false;

function getUser() {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Unauthorized access to the user data");
      throw new Error("Not valid user");
      
    }

    resolve({
      username: "admin",
    });
  });
}

try {
  getUser()
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`));
} catch (error) {
  console.log(`Caught ${error}`);
}