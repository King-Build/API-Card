const userGrid = document.getElementById('userGrid');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');
            card.innerHTML = `
            <h2>${user.name}</h2>
            <p><span>Username:</span> ${user.username}</p>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Phone:</span> ${user.phone}</p>
            <p><span>Website:</span> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><span>Company:</span> ${user.company.name}</p>
            <p><span>City:</span> ${user.address.city}</p>
          `;
            userGrid.appendChild(card);
        });
    })
    .catch(err => {
        userGrid.innerHTML = `<p style="color: red;">Xatolik yuz berdi: ${err.message}</p>`;
        console.error(err);
    });