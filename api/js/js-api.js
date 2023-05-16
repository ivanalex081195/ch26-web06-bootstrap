/* Solicitar datos de API */
/* let url = "https://reqres.in/api/users?page=2";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));
 */

data = [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}];
console.log(data);
console.log(data.length);
const mostrarData = (data) => {
  console.log(data);
  let body = "";
  for (var i = 0; i < data.length; i++) {
    body += 
    `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].email}</td>
        <td>${data[i].first_name}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].avatar}</td></tr>`;
  }
  document.getElementById("data").innerHTML = body;
};


 const printUsers = (users) => { 
    let listUsers = "";
    users.forEach((user) => {
        listUsers += 
        `<tr class="border p-1 my-2">
            <td scope="row" data-label="ID">${user.id}</td>
            <td data-label="First Name">${user.first_name}</td>
            <td data-label="Last Name">${user.last_name}</td>
            <td data-label="E-Mail">${user.email}</td>
            <td class="border-bottom-0" data-label="Image"><img class="rounded-circle" width="75" src="${user.avatar}" alt=""></td>
        </tr>`;
              
    });
    usersContainer.innerHTML = listUsers;
}

const getUsers = async (url) =>{
    try {
        const getResponse = await fetch(url);
        const getDataUsers = await getResponse.json();
        return getDataUsers.data;
        
    } catch (err) {
        return err;
    }
} 