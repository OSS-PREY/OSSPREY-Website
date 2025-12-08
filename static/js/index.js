window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  if (!$('#interpolation-image-wrapper').length) {
    return;
  }

  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  if (!image) {
    return;
  }

  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

function initializeInterpolationDemo() {
  var $wrapper = $('#interpolation-image-wrapper');
  var $slider = $('#interpolation-slider');

  if (!$wrapper.length || !$slider.length) {
    return;
  }

  preloadInterpolationImages();

  $slider.on('input', function(event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $slider.prop('max', NUM_INTERP_FRAMES - 1);

  bulmaSlider.attach();
}

function updateThemeToggle(theme) {
  var icon = $('#theme-toggle i');
  var label = $('#theme-toggle .toggle-label');
  var button = $('#theme-toggle');

  if (theme === 'dark') {
    icon.removeClass('fa-moon').addClass('fa-sun');
    label.text('Switch to Light');
    button.removeClass('is-light').addClass('is-dark');
  } else {
    icon.removeClass('fa-sun').addClass('fa-moon');
    label.text('Switch to Dark');
    button.removeClass('is-dark').addClass('is-light');
  }
}

function setTheme(theme) {
  if (theme === 'dark') {
    $('body').addClass('dark-mode').removeClass('light-mode');
  } else {
    $('body').addClass('light-mode').removeClass('dark-mode');
  }
  updateThemeToggle(theme);
}

function initializeTheme() {
  var storedTheme = localStorage.getItem('ossprey-theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  $('#theme-toggle').on('click', function() {
    var currentTheme = $('body').hasClass('dark-mode') ? 'dark' : 'light';
    var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('ossprey-theme', nextTheme);
  });
}

function initializeStickySectionNav() {
  var trigger = document.querySelector('.publication-links');
  var stickyNav = document.getElementById('sticky-section-nav');

  if (!trigger || !stickyNav) {
    return;
  }

  var toggleNav = function(show) {
    stickyNav.classList.toggle('is-visible', show);
  };

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        toggleNav(!entry.isIntersecting);
      });
    });

    observer.observe(trigger);
  } else {
    toggleNav(true);
  }
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/

    initializeInterpolationDemo();
    initializeTheme();
    initializeStickySectionNav();

})
