// Animate Smooth Scroll
$('#view-work').on('click', function () {
    const image =$ ('image').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900);
});

//$=getElementById 