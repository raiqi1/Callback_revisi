function getUsers(response) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      response(data);
    }
  };
  xhr.send();
}
function displayUsers(users) {
  const table = document.getElementById("user-table");
  for (let i = 0; i < users.length; i++) {
    const row = table.insertRow();
    const idCell = row.insertCell();
    const nameCell = row.insertCell();
    const usernameCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    const websiteCell = row.insertCell();
    const addressCell = row.insertCell();
    const companyCell = row.insertCell();
    
    idCell.innerText = users[i].id;
    nameCell.innerText = users[i].name;
    usernameCell.innerText = users[i].username;
    emailCell.innerText = users[i].email;
    phoneCell.innerText = users[i].phone;
    websiteCell.innerHTML = users[i].website;
    addressCell.innerText = `${users[i].address.street}, ${users[i].address.suite}, ${users[i].address.city}, ${users[i].address.zipcode}`;
    companyCell.innerText = users[i].company.name;
  }
}
getUsers(displayUsers);
