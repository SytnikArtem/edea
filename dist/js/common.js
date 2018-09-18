$(document).ready(function() {

    $('.btn-click').click(function(e) {
      e.preventDefault();
      $('.enter').fadeOut();
      $(this).closest('.js-active').fadeOut().removeClass('active').next().fadeIn().addClass('active');
    });
    var counter = 0;
    $('.front-form-btn').click(function(e) {
      e.preventDefault();

      var stepNumber = $('.progress-text-number').text();
      if($(this).hasClass('front-form-btn_back')) {
        counter = counter - 1;
        $(this).closest('.front-main').fadeOut().prev().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').eq(+stepNumber - 1).removeClass('active');
        $('.progress-text-number').text(+stepNumber - 1);
      }
      else {
        counter ++
        $(this).closest('.front-main').fadeOut().next().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').next().addClass('active');
        $('.progress-text-number').text(+stepNumber + 1);
      }
    });
    $('.services-btn').click(function() {
      $('.popup-first').fadeIn();
    })
    $('.skills-btn').click(function() {
      $('.popup-third').fadeIn();
    })
    $('.popup-third-btn').click(function() {
      $(this).closest('.popup').fadeOut();
    });
    $('.popup-first-link').click(function(e) {
      e.preventDefault();
      let itemIndex = $(this).closest('.popup-first-item').index();
      console.log(itemIndex);
      $('.popup-second-item').eq(itemIndex).addClass('active').siblings().removeClass('active');
      $('.content-item').eq(itemIndex).fadeIn().siblings().fadeOut();
      $('.popup-second').fadeIn();
    });
    $('.popup-second-item').click(function() {
      let clickIndex =   $(this).index();
      console.log(clickIndex);
      $(this).addClass('active').siblings().removeClass('active');
      $('.content-item').eq(clickIndex).fadeIn().siblings().fadeOut();
    });
    $('.content-right-btn').click(function() {
      $('.popup').fadeOut();
    });
    $('.info-item').click(function() {
      let idexMenu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.edit-content').eq(idexMenu).fadeIn().siblings().fadeOut();
    });
    $('.edit-more').click(function() {
      $(this).parent().find('.edit-photo-list').fadeToggle();
    });
    $('.general-top-video').click(function() {
      $('.ins-video').fadeIn();
    });
    $('.general-top-img').click(function() {
      $('.up-photo').fadeIn();
    });
    $('.ins-video').click(function(e){
      var elem = $(".ins-video-container");
      if(e.target!=elem[0]&&!elem.has(e.target).length)
      {
        $('.ins-video').fadeOut();
      }
    });
    $('.ins-video-close').click(function(e){
        $('.ins-video').fadeOut();
    });
    $('.up-photo').click(function(e){
      var elem = $(".up-photo-container");
      if(e.target!=elem[0]&&!elem.has(e.target).length)
      {
        $('.up-photo').fadeOut();
      }
    });
    $('.ins-video-close').click(function(e){
        $('.ins-video').fadeOut();
    });
    $('.up-photo-close').click(function(e){
        $('.up-photo').fadeOut();
    });
    $(".up-photo-list").mCustomScrollbar({
      theme:"my-theme",
      scrollEasing:"lineaar"
    });
    $('.general-center-item').click(function() {

      $(this).addClass('active').siblings().removeClass('active');
      let index = $(this).index();
      console.log(index);
      $('.general-top-change').eq(index).show().siblings().hide();

      var height = $('.general-top-change').eq(index).height();
      if (index === 2 || index === 0) {
        $('.general-top-input_hide').hide();
      }
      else {
        $('.general-top-input_hide').show();
      }
    });
  $('.general-center-item').click(function() {
    let index = $(this).index();
    if (index > 2) {
      $('.general-top-label').fadeIn();
    }
    else {
      $('.general-top-label').fadeOut();
    }
  });
    $('#options').ddslick();
    $('.general-left-item-btn').click(function() {
      $(this).closest('.general-left-item').toggleClass('active').siblings().removeClass('active');
      $('.general-left-item').find('.general-left-sublist').slideUp();
      $('.general-left-item.active').find('.general-left-sublist').slideDown();
    });
    $('.general-header-drop').click(function() {
      $(this).next().slideToggle();
    });
    $('.general-post-more').click(function() {
      $(this).find('.general-header-droplist').slideToggle();
    });
    $('.general-left-button-svg').click(function() {
      $(this).closest('.general-left-block').find('.general-left-list').slideToggle();
    });
  $('.general-left-button-svg.filter').click(function() {
    $('.network-filter-sublist').slideUp();
    $(this).next().slideToggle();
  });
});
