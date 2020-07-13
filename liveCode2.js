// Pada Live Code kali ini, buatlah sebuah halaman login yang akan terlempar ke halaman utama yang berisi list biodata ketika login sukses. Ketika login gagal maka akan muncul notifikasi kegagalan.
// Kriteria
//     gunakan username dan password untuk login
//     Gunakan asyn await
//     List biodata berisi nama, alamat dan nomor telpon

let dataUser = [
  { username: "faqih", password: "123456" },
  { username: "andi", password: "abcd" },
  { username: "budi", password: "123" },
];

const username = (dataUsername, dataPassword) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].username == dataUsername) {
          resolve(true);
        }
      }
      err = `username: tidak sesuai`;
      reject(err);
    }, 1000);
  });

const password = (dataUsername, dataPassword) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].password == dataPassword) {
          resolve(true);
        }
      }
      err = `password: tidak sesuai`;
      reject(err);
    }, 2000);
  });

const run = async function (inputUsername, inputPassword) {
  const resultUsername = await username(inputUsername, inputPassword);
  console.log(`username:`, resultUsername);
  const resultPassword = await password(inputUsername, inputPassword);
  console.log(`password:`, resultPassword);
  return resultPassword;
};

// run("budi", "123")
//   .then(() => {})
//   .catch((err) => {
//     console.log(err);
//   });
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username);
  console.log(password);
  run(username, password)
    .then((resultPassword) => {
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
