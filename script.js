$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up-script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle/menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web-Designer", "YouTuber", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web-Designer", "YouTuber", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });



});
document.getElementById("fromSubmit").addEventListener('click', function (e) {
    e.preventDefault()
    const contactsParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_jb96gwt", "template_p88uf3w", contactsParams).then(function (res) {
        if (res.status === 200) {
            alert('Your Message Send Succefully')
        }
    })
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('message').value = ""
})