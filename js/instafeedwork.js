$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '27498950411',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '27498950411.1677ed0.244920db9b664799ba0e678a967f71ac',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
