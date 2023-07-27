function getUsers() {
  var xhr = new XMLHttpRequest();
  var url = 'https://jsonplaceholder.typicode.com/users';
  var tbody = document.getElementsByTagName('tbody')[0];
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var rows = '';
      for (var i = 0; i < response.length; i++) {
        rows += `
        <tr>
            <td>${response[i].id}</td>
            <td>${response[i].name}</td>
            <td>${response[i].email}</td>
            <td>${response[i].phone}</td>
            <td>${response[i].website}</td>
        </tr>
    `;
      }
      tbody.innerHTML = rows;
    }
  };
}
