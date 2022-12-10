(Array.from(document.getElementsByTagName("a"))).forEach((a) => {
    console.log("assd");
    a.addEventListener("click", book);
});



function book(e) {
    e.preventDefault();
    console.log(e.target.id);

    if (e.target.id == "c") {
        read("./books/LOTR.txt", "Lord Of The Rings");
    }


    if (e.target.id == "a") {
        read("./books/AliceInWonderland.txt", "Alice In WonderLand");
    }

    if (e.target.id == "b") {
        read("./books/JekyllAndHyde.txt", "Jekyll And Hyde");
    }

}


function read(url, title) {

    var c = new XMLHttpRequest();
    c.open('GET', url);
    c.onreadystatechange = function() {
        var t = c.responseText;
        document.getElementById("title").innerText = title;
        document.getElementById("book").innerText = t;
    }
    c.send();
}
