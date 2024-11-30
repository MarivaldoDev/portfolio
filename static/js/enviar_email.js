const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            successMessage.style.display = 'block'; // Mostra a mensagem de sucesso
            form.reset(); // Limpa o formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    } catch (error) {
        alert('Erro ao enviar o formulário. Verifique sua conexão e tente novamente.');
    }
});