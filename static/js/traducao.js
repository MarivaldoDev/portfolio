// Script para alternar idiomas
document.getElementById('translate-button').addEventListener('click', function () {
    const currentLang = this.textContent;
    if (currentLang === 'EN') {
        translateToEnglish();
        this.textContent = 'PT';
    } else {
        translateToPortuguese();
        this.textContent = 'EN';
    }
});

function translateToEnglish() {
    document.querySelector('html').setAttribute('lang', 'en');
    document.querySelector('#home').textContent = 'Home';
    document.querySelector('#especialidades').textContent = 'About';
    document.querySelector('#servicos').textContent = 'Services';
    document.querySelector('#contato').textContent = 'Contact';
}

function translateToPortuguese() {
    document.querySelector('html').setAttribute('lang', 'pt');
    document.querySelector('#home').textContent = 'Início';
    document.querySelector('#sobre').textContent = 'Sobre';
    document.querySelector('#servicos').textContent = 'Serviços';
    document.querySelector('#contato').textContent = 'Contato';
}
