	$('img').on('dragstart', function(event) { event.preventDefault(); });

	if (!$.support.transition)
	$.fn.transition = $.fn.animate;
	
	// la_map
	
	$(' .region_text ').hover(function(){
			$(this).show().hide();
		}, function(){}
	);
	
	// css already hid .region_bottom, .region_border, .region_top, .region_text
	$(' .pointer ').mouseover(function(){
			$( this ).addClass(' active ');
			$(' .active ').children().css('z-index', 100);
			$(' .active .region_text ').stop().show();
			$(' .active .region_bottom, .active .region_top ').stop().show().transition({ scale: 1.1 });
			$(' .active .region_border ').stop().show().transition({ scale: 1.25, delay: 300  });
		}).mouseout(function(){
			$(' .active .region_bottom, .active .region_border, .active .region_top, .active .region_text ').stop().hide().transition({ scale: 1 });
			$( this ).removeClass(' active ');
		}
	);
	
	// equal height

	equalheight = function(container){

	var currentTallest = 0,
			 currentRowStart = 0,
			 rowDivs = new Array(),
			 $el,
			 topPosition = 0;
	 $(container).each(function() {

		 $el = $(this);
		 $($el).height('auto')
		 topPostion = $el.position().top;

		 if (currentRowStart != topPostion) {
			 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				 rowDivs[currentDiv].height(currentTallest);
			 }
			 rowDivs.length = 0; // empty the array
			 currentRowStart = topPostion;
			 currentTallest = $el.height();
			 rowDivs.push($el);
		 } else {
			 rowDivs.push($el);
			 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			 rowDivs[currentDiv].height(currentTallest);
		 }
	 });
	}
	
	$(window).load(function() {
		equalheight('#la_cover .column');
	});

	$(window).resize(function(){
		equalheight('#la_cover .column');
	});
	
	$(window).load(function() {
		equalheight('#la_info .column');
	});

	$(window).resize(function(){
		equalheight('#la_info .column');
	});

	$(window).load(function() {
		equalheight('.encase');
	});

	$(window).resize(function(){
		equalheight('.encase');
	});
	
	$(window).load(function() {
		equalheight('.case');
	});

	$(window).resize(function(){
		equalheight('.case');
	});
	
	

