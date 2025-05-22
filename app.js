document.addEventListener('DOMContentLoaded', function () {
    const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
    const bookList = document.getElementById('book-list');
  
    fetch(booksEndpoint)
      .then(response => response.json())
      .then(books => {
        books.forEach(book => {
          const bookElement = document.createElement('div');
          bookElement.className = `rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn`;
          bookElement.innerHTML = `
            <h3 class="text-xl font-semibold text-green-600 mb-2">${book.titulo}</h3>
            <img src="${book.imagem}" alt="${book.titulo}" class="w-full h-auto max-h-72 object-contain rounded-md mb-4 shadow-sm" />
            <p class="text-gray-600 text-sm">${book.resumo}</p>
          `;
          bookList.appendChild(bookElement);
        });             
      })
      .catch(error => {
        console.error('Erro ao carregar os livros:', error);
      });
  });  