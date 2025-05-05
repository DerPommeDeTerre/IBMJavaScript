var xhr = new XMLHttpRequest();

var url = "newsArticle.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function(){
    var newsArticles = xhr.response.news;
    var newsArticlesDiv = document.getElementById("newsArticles");

    newsArticles.forEach(function(newsArticle){
        var newsArticleDiv = document.createElement("div");
        newsArticleDiv.classList.add("newsArticle");

        var header = document.createElement("h2");
        header.textContent = newsArticle.Header;

        var content = document.createElement("p");
        content.textContent = newsArticle.Content;

        var newspaper = document.createElement("h3");
        newspaper.textContent = `Newspaper: ${newsArticle.Newspaper}`;

        var author = document.createElement("h3");
        author.textContent = `Author: ${newsArticle.Author}`;

        var date = document.createElement("p");
        date.textContent = `Publication Date: ${newsArticle.Date}`;

        var placesHeader = document.createElement("h3");
        placesHeader.textContent = "Publication Places: ";

        var placesList = document.createElement("ul");
        newsArticle.publicationPlaces.forEach(function(place){
            var placeItem = document.createElement("li");
            placeItem.textContent = place;
            placesList.appendChild(placeItem);
        })

        newsArticleDiv.appendChild(header);
        newsArticleDiv.appendChild(content);
        newsArticleDiv.appendChild(newspaper);
        newsArticleDiv.appendChild(author);
        newsArticleDiv.appendChild(date);
        newsArticleDiv.appendChild(placesHeader);
        newsArticleDiv.appendChild(placesList);

        newsArticlesDiv.appendChild(newsArticleDiv);
    })
    
}

xhr.send();