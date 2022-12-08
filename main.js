
var deleteLog = false;

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['index', 'snow-show', 'moo-mission', 'pirate-paws', 'fast-face', 'feature-films', 'spooky-spirits', 'grateful-garden', 'cloud-doodle', 'compurrsers', 'research'],
        sectionsColor: ['#5b4abb', '#30c7f4', '#705ff1', '#e9abaa', '#f17e58', '#00d0c7', '#00d0c6', '#5ac477', '#54a4ff', '#d493f5'],
        loopTop: true,
        loopBottom: true
    });
    $("video").click( function (){
        if( $(this).prop('muted') )
        {
            $(this).prop('muted', false);
            $(this).parent().find('.mute-icon').attr('src','images/video/unmute.svg');
        }

        else {
            $(this).prop('muted', true);
            $(this).parent().find('.mute-icon').attr('src','images/video/mute.svg');
        }

    });
    if(window.location.hash == "#contacts") {
        $('.contact').show();
        $('.about').hide();
    }
    if(window.location.hash == "#about") {
        $('.about').show();
        $('.contact').hide();
    }
    $(".nav-menu-icon").click( function (){
        $('.nav-menu').addClass('active');
        $('.nav-menu-content').addClass('active');
    });
    $(".nav-menu__close-icon, .nav-menu a").click( function (){
        $('.nav-menu').removeClass('active');
        $('.nav-menu-content').removeClass('active');
    });
    $(".call-about").click( function (){
        $('.about').show();
        $('.contact').hide();
    });
    $(".call-contact").click( function (){
        $('.contact').show();
        $('.about').hide();
    });
    $(".logo, .anchor").click( function (){
        $('.contact').hide();
        $('.about').hide();
    });
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
});