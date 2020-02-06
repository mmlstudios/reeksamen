$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});


(function sectionCheck() {
        let navLinks = $('nav ul li a');
        let navH = $('nav').height();
        let section = $('section');
        let documentEl = $(document);

                documentEl.on('scroll', function() {
                    let currentScrollPos = documentEl.scrollTop();

                    section.each(function() {
                        let self = $(this);
                        if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
                            let targetClass = '.' + self.attr('class') + '-marker';
                            navLinks.removeClass('active');
                            $(targetClass).addClass('active');
                        }
                    });

                });

			})();

			$(function() {
			    let mobileHead = $(".mobileheader");
					let logoImg = $(".logomobile");
					let topVideo = $(".fullscreen-video-wrap")
			    $(window).scroll(function() {
			        let scroll = $(window).scrollTop();

			        if (scroll >= topVideo.outerHeight()) {
			            mobileHead.removeClass('mobileheader').addClass('mobileheader-alt');
									logoImg.removeClass("logomobile").addClass('logomobile-alt');
			        } else {
			            mobileHead.removeClass("mobileheader-alt").addClass('mobileheader');
									logoImg.removeClass('logomobile-alt').addClass('logomobile');
			        }
			    });
			});
