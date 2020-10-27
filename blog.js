function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}

function blogSubmit() {
    var title = document.getElementById("titleInput").value;
    var text = document.getElementById("textInput").value;
    var titleErr = document.getElementById("titleErr");
    var textErr = document.getElementById("textErr");
    
    /* Validate submission form */
    if (title == "") {
        titleErr.style.display = "block";
    } else {
        titleErr.style.display = "none";
    }
    if (text == "") {
        textErr.style.display = "block";
    } else {
        textErr.style.display = "none";
    }
    if (title != "" && text != "") {
        var author="Anonymous";
        var parentNode = document.getElementById("blogPosts");
        var blogInnerHtml = `
        <div>
        <br>
        <div class="card">
        <div class="card-body">
        <h1>${title}</h1>
        <i class="text-muted">by ${author}</i><br/><br/>
        <p>${text}</p>
        </div>    
        </div>
        </div>
        `

        var element = createElementFromHTML(blogInnerHtml);
        parentNode.prepend(element);
    }
}

