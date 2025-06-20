document.addEventListener("DOMContentLoaded", () => {
    // Retrieve playerCount from localStorage or default to 1
    const playerCount = Number(localStorage.getItem('playerCount')) || 1;

    const form = document.getElementById('nameForm');
    for (let i = 1; i <= playerCount; i++) {
        const label = document.createElement('label');
        label.textContent = `Player ${i} Name: `;
        label.setAttribute('for', `player${i}Name`);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `player${i}Name`;
        input.name = `player${i}Name`;
        input.required = true;

        const br = document.createElement('br');

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(br);
    }

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
});

function savePlayerCount(count) {
    localStorage.setItem('playerCount', count);
}

document.getElementById('submitPlayerCount').onclick = function() {
    const playerCount = document.getElementById('playerCount').value;
    localStorage.setItem('playerCount', playerCount); 
    alert('Player count submitted: ' + playerCount);
    window.location.href = 'names.html';
};

document.getElementById("nameForm").onsubmit = function (event) {
    event.preventDefault();
    const playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
        const name = document.getElementById(`player${i}Name`).value;
        playerNames.push(name);
    }
    localStorage.setItem("playerNames", JSON.stringify(playerNames));
    window.location.href = "info.html";
};