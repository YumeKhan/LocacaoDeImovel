// main.js
function showForm(formId) {
    const forms = document.getElementsByClassName('form-container');
    for (let form of forms) {
        form.style.display = 'none';
    }
    const targetForm = document.getElementById(formId);
    if (targetForm) {
        targetForm.style.display = 'block';
    } else {
        console.error(`Elemento não encontrado: ${formId}`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailElement = document.getElementById('forgot-email');
            if (emailElement) {
                const email = emailElement.value;
                fetch('/backend/routes/auth.php?action=reset', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email })
                })
                .then(response => {
                    if (response.ok) {
                        const successMessage = document.getElementById('success-message');
                        if (successMessage) {
                            successMessage.style.display = 'block';
                        } else {
                            console.error('Elemento não encontrado: success-message');
                        }
                    } else {
                        alert('Erro ao enviar e-mail de recuperação. Por favor, tente novamente mais tarde.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar solicitação:', error);
                    alert('Erro ao enviar e-mail de recuperação. Por favor, tente novamente mais tarde.');
                });
            } else {
                console.error('Elemento não encontrado: forgot-email');
            }
        });
    } else {
        console.error('Elemento não encontrado: forgotPasswordForm');
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailElement = document.getElementById('loginEmail');
            const passwordElement = document.getElementById('loginPassword');
            if (emailElement && passwordElement) {
                const email = emailElement.value;
                const password = passwordElement.value;
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        window.location.href = '.html';
                    })
                    .catch((error) => {
                        alert('Erro ao fazer login: ' + error.message);
                    });
            } else {
                console.error('Elementos de login não encontrados');
            }
        });
    } else {
        console.error('Elemento não encontrado: loginForm');
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const name = document.getElementById('new-username').value;
            const email = document.getElementById('new-email').value;
            const password = document.getElementById('new-password').value;

            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                // Adicione o nome do usuário ao perfil
                const user = firebase.auth().currentUser;
                await user.updateProfile({ displayName: name });
                alert('Cadastro realizado com sucesso! Agora faça o login.');

                // Redirecionar para a seção de login após o registro
                showForm('login-section');
            } catch (error) {
                console.error('Falha no cadastro:', error);
                alert('Falha no cadastro: ' + error.message);
            }
        });
    } else {
        console.error('Elemento não encontrado: registerForm');
    }

    const forgotPasswordFormSubmit = document.getElementById('forgotPasswordForm');
    if (forgotPasswordFormSubmit) {
        forgotPasswordFormSubmit.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailElement = document.getElementById('forgotEmail');
            if (emailElement) {
                const email = emailElement.value;
                firebase.auth().sendPasswordResetEmail(email)
                    .then(() => {
                        alert('Email de recuperação enviado');
                    })
                    .catch((error) => {
                        alert('Erro ao enviar email de recuperação: ' + error.message);
                    });
            } else {
                console.error('Elemento não encontrado: forgotEmail');
            }
        });
    } else {
        console.error('Elemento não encontrado: forgotPasswordForm');
    }

    const registerButton = document.getElementById('register-button');
    if (registerButton) {
        registerButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    } else {
        console.error('Elemento não encontrado: register-button');
    }
});
