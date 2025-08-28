// Ambil elemen container
const container = document.getElementById("container");

// Ambil data dari blog.json
fetch("blog.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      // Buat div.card
      const card = document.createElement("div");
      card.classList.add("card");

      // Isi card dengan template
      card.innerHTML = `
        <a href="${post.link}" class="card-thumbnail">
          <img src="${post.image}" alt="${post.title}" width="100%" />
        </a>
        <h3 class="card-title"><a href="${post.link}"> ${post.title}</a></h3>
        <div class="card-bottom">
          <span class="author">${post.author}</span>
          <span class="date">${post.date}</span>
        </div>
      `;

      // Masukkan card ke dalam container
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Gagal mengambil data:", error));
