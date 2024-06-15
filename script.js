// Función para registrar un nuevo usuario
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword && emailPattern.test(email)) {
            console.log('Nombre de Usuario:', username);
            console.log('Correo Electrónico:', email);
            console.log('Contraseña:', password);

            const registerList = document.getElementById('registerList');
            registerList.innerHTML = '';

            const datos = [username, email];
            for (let i = 0; i < datos.length; i++) {
                const li = document.createElement('li');
                li.textContent = datos[i];
                registerList.appendChild(li);
            }

            alert('Registro exitoso.');
        } else {
            if (!emailPattern.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
            }
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
            }
        }
    } else {
        alert('Por favor, llene todos los campos.');
    }
});

// Función para iniciar sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (username && password) {
        console.log('Nombre de Usuario:', username);
        console.log('Contraseña:', password);

        const loginList = document.getElementById('loginList');
        loginList.innerHTML = '';

        const datos = [username];
        for (let i = 0; i < datos.length; i++) {
            const li = document.createElement('li');
            li.textContent = datos[i];
            loginList.appendChild(li);
        }

        alert('Inicio de sesión exitoso.');
    } else {
        alert('Por favor, llene todos los campos.');
    }
});
