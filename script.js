// Diccionario de palabras
const dictionary = [
    "feliz", "triste", "rápido", "lento", "grande", "pequeño", 
    "inteligente", "tonto", "hermoso", "feo", "fuerte", 
    "débil", "amable", "grosero", "valiente"
];

let currentSearchWord = "";

// Función para buscar palabra o símbolo en el texto
function searchWord() {
    const searchWord = document.getElementById("searchWord").value;
    const userText = document.getElementById("userText").value;

    // Verificar si la palabra o símbolo está en el texto
    if (userText.includes(searchWord)) {
        currentSearchWord = searchWord;
        document.getElementById("replaceOptions").classList.remove("hidden");
        document.getElementById("searchedWord").textContent = searchWord;

        // Llenar el select con palabras del diccionario
        const replaceWordSelect = document.getElementById("replaceWordSelect");
        replaceWordSelect.innerHTML = ""; // Limpiar opciones anteriores
        dictionary.forEach(word => {
            const option = document.createElement("option");
            option.value = word;
            option.textContent = word;
            replaceWordSelect.appendChild(option);
        });
    } else {
        alert("La palabra o símbolo no se encuentra en el texto.");
    }
}

// Función para reemplazar palabra o símbolo
function replaceWord() {
    const selectedWord = document.getElementById("replaceWordSelect").value;
    const userText = document.getElementById("userText").value;

    // Reemplazar el carácter o palabra buscada por la seleccionada
    const updatedText = userText.replace(new RegExp(currentSearchWord, 'g'), selectedWord);
    document.getElementById("userText").value = updatedText;

    // Ocultar opciones
    document.getElementById("replaceOptions").classList.add("hidden");
}

// Función para restablecer campos
function resetAll() {
    document.getElementById("userText").value = ""; // Limpiar el área de texto
    document.getElementById("searchWord").value = ""; // Limpiar el campo de búsqueda
    document.getElementById("replaceOptions").classList.add("hidden"); // Ocultar opciones de reemplazo
    currentSearchWord = ""; // Reiniciar palabra de búsqueda
}
