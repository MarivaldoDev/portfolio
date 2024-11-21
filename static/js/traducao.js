// Selecionar o botão de tradução
const translateButton = document.getElementById('translateButton');

// Estado atual do idioma
let currentLanguage = 'pt'; // Idioma padrão da página

// API de tradução do Google
const API_URL = "https://translate.googleapis.com/translate_a/single";

// Função para traduzir texto usando a API do Google Translate
async function translateText(text, targetLang) {
    try {
        const response = await fetch(`${API_URL}?client=gtx&sl=${currentLanguage}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await response.json();
        return data[0].map(item => item[0]).join(""); // Extrai o texto traduzido
    } catch (error) {
        console.error("Erro ao traduzir:", error);
        return text; // Retorna o texto original em caso de erro
    }
}

// Função para traduzir todos os nós de texto de um elemento
async function translateElement(element, targetLang) {
    const textNodes = [];

    // Coletar todos os nós de texto do elemento
    element.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            const originalText = node.dataset?.originalText || node.textContent.trim();

            if (!node.dataset?.originalText) {
                node.dataset = { originalText }; // Salva o texto original no dataset
            }

            textNodes.push({ node, originalText });
        }
    });

    // Traduzir cada nó de texto individualmente
    for (const { node, originalText } of textNodes) {
        try {
            const translatedText = await translateText(originalText, targetLang);
            node.textContent = translatedText;
        } catch (error) {
            console.error(`Erro ao traduzir nó: ${originalText}`, error);
        }
    }
}

// Função para iterar e traduzir todos os elementos da página
async function translatePage(targetLang) {
    const elementsToTranslate = document.querySelectorAll("*:not(span)"); // Seleciona todos os elementos, exceto <span>

    for (const element of elementsToTranslate) {
        if (element.childNodes.length) {
            await translateElement(element, targetLang);
        }
    }
}

// Evento de clique para alternar o idioma
translateButton.addEventListener("click", () => {
    const targetLang = currentLanguage === "pt" ? "en" : "pt";
    translatePage(targetLang).then(() => {
        currentLanguage = targetLang;
        translateButton.textContent = currentLanguage === "pt" ? "EN" : "PT";
    });
});
