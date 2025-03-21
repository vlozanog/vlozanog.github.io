function NewsDisplay() {
    const api = "146eb8c8638c4cbf93b1469392492707";
    const link = `https://newsapi.org/v2/everything?q=wsj&sortBy=latest&apiKey=${api}`;

    fetch(link)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news_list");

            for (let i = 0; i < Math.min(10, data.articles.length); i++) {
                let article = data.articles[i];
                newsContainer.innerHTML += `<li>
                <a href="${article.url}">${article.title}</a>
                <p>${article.description || "No description available."}</p>
                </li>`;
            }
        })
};

document.addEventListener("DOMContentLoaded", function() {
    NewsDisplay();
});