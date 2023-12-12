// router.js

$(document).ready(function () {
    // Listen for click events on anchor tags within the navigation
    $('nav a').click(function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag

        // Get the href attribute of the clicked link
        var page = $(this).attr('href');

        // Load the content of the selected page into the 'content' div
        $('#content').load(page);
    });
});
