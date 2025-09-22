function showDescription(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).nextElementSibling.style.display = "block";
}

function hideDescription(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id).nextElementSibling.style.display = "none";
}