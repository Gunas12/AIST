let currentPage = 1;
const usersPerPage = 10;

document.addEventListener("DOMContentLoaded", loadMoreUsers);

document.getElementById("loadUsersBtn").addEventListener("click", loadMoreUsers);

function loadMoreUsers() {
    fetch(`https://api.github.com/users?page=${currentPage}&per_page=${usersPerPage}`)
        .then(response => response.json())
        .then(data => {
            displayUsersWithEmail(data);
            currentPage++; // Her tıklamada bir sonraki sayfayı almak için currentPage değerini artır
        })
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsersWithEmail(users) {
    const userList = document.getElementById("userList");

    userList.innerHTML = ''; // Mevcut listeyi temizle

    users.forEach(user => {
        const email = user.email ? user.email : 'Email not available';
        const listItem = document.createElement("li");
        listItem.classList.add("user-item");
        listItem.innerHTML = `
            <strong>${user.login}</strong> - ${email}
        `;
        userList.appendChild(listItem);
    });
}