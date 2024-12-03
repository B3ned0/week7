var age = prompt("Age?")

if (age >= 18) {
    document.getElementById("video").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0oY2tXScYsc?si=0Uop9nNi3EOQnhED\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
        ""
} else {
    document.getElementById("video").innerHTML = "you are Under-Aged"
}