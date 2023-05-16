/* Solicitar datos de API */
/* let url = "https://reqres.in/api/users?page=2";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));
 */
/* 
data = [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.i
n/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}];
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
  document.getElementById('data').innerHTML = body;
  const tableContainer = document.getElementById('data');
    tableContainer.appendChild(table);
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
    const tableContainer = document.getElementById('data');
    tableContainer.appendChild(table);
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
 */
/* 
// Coloca aquí el código JavaScript para obtener y tabular los datos
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(data => {
    const users = data.data; // Datos de los usuarios
    const table = document.createElement('table'); // Crea la tabla

    // Crea las filas y celdas de la tabla
    users.forEach(user => {
      const row = table.insertRow(); // Crea una fila

      // Crea las celdas con los datos del usuario
      const idCell = row.insertCell();
      idCell.textContent = user.id;

      const firstNameCell = row.insertCell();
      firstNameCell.textContent = user.first_name;

      const lastNameCell = row.insertCell();
      lastNameCell.textContent = user.last_name;

      const emailCell = row.insertCell();
      emailCell.textContent = user.email;

      const imageCell = row.insertCell();
      imageCell.textContent = user.avatar;

    });
    const tableContainer = document.getElementById('data');
    tableContainer.appendChild(table);
  })
  .catch(error => console.error(error)); */

  const tableBody = document.querySelector("#user-table tbody");
  fetch('https://reqres.in/api/users?delay=3')
    .then(response => response.json())
    .then(data => {
      const users = data.data; // Datos de los usuarios

      users.forEach(user => {
        const row = tableBody.insertRow(); // Crea una fila

        // Crea las celdas con los datos del usuario
        const idCell = row.insertCell();
        idCell.textContent = user.id;

        const firstNameCell = row.insertCell();
        firstNameCell.textContent = user.first_name;

        const lastNameCell = row.insertCell();
        lastNameCell.textContent = user.last_name;

        const emailCell = row.insertCell();
        emailCell.textContent = user.email;

        const avatarCell = row.insertCell();
        const avatarImage = document.createElement('img');
        avatarImage.src = user.avatar;
        avatarCell.appendChild(avatarImage);
      });
    })
    .catch(error => console.error(error));
