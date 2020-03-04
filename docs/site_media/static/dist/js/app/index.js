if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }


/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");

$('.popover-trigger').popover({
    'html'     : true
});

// dismiss popovers when area outside of popover is clicked
$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

$('.requester-credentials').hide();

// show / hide requester credentials
$('.requester-credential-trigger a').click(function () {

    $(this).addClass('hide');
    $(this).siblings('.icon').toggleClass('rotate rotate-transition');

    $(this).parent().next().slideDown({
        duration: 500,
        easing: 'easeInQuad'
    });
});

$(window).load(function() {
    $('#js-hero').transition({opacity: 100}, 800).css({ y: '-30px' });
});