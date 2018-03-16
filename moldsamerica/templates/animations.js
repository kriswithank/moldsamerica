//Cache reference to window and animation items
var $window = $(window);
$window.on('scroll', animateInView);
$window.on('scroll resize', animateInView);

function animateElemsInRange(elems, upperBound, lowerBound, animation) {
  console.log('foo');
  $.each(elems, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPos = $element.offset().top;
    var elementBottomPos = (elementTopPos + elementHeight);
    var elementUnanimated = !$element.hasClass('animated');

    //check to see if this current container is within viewport
    if ((elementBottomPos >= upperBound) &&
        (elementTopPos <= lowerBound) &&
        elementUnanimated) {
      $element.addClass(animation);
    }
  });
}

function animateInView() {
  var windowHeight = $window.height();
  var windowTopPos = $window.scrollTop();
  var windowBottomPos = (windowTopPos + windowHeight);

  animateElemsInRange($('.animateSlideInUp'), windowTopPos,
    windowBottomPos, 'animated slideInUp');
  animateElemsInRange($('.animateSlideInLeft'), windowTopPos,
    windowBottomPos, 'animated slideInLeft');
  animateElemsInRange($('.animateSlideInRight'), windowTopPos,
    windowBottomPos, 'animated slideInRight');
}
