const listUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  let tableBody = ``;

  users.forEach((element) => {
    tableBody += `<tr>
        <td class="center">${element.id}</td>
        <td class="center">${element.name}</td>
        <td class="center">${element.username}</td>
        <td class="center">${element.email}</td>
        <td class="center">${element.website}</td>
        </tr>`;
  });
  //document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
  listUser();
});
