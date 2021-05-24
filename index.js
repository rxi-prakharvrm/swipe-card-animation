
var swipeCardContainer = document.querySelector('.swipe-card-container');
var cardBehind = document.querySelector('.card-behind');
swipeCardContainer.addEventListener("mouseover", function() {
    cardBehind.classList.add("card-mouseover-anim");
    cardBehind.classList.remove("card-mouseout-anim");
})

swipeCardContainer.addEventListener("mouseout", function() {
    cardBehind.classList.add("card-mouseout-anim");
    cardBehind.classList.remove("card-mouseover-anim");
})