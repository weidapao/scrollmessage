var Les = {};
;(function ($) {
	'use strict';
	$.extend(Les,{
		"scrollmessage":function(options){
			var defaults = {
				dom:'',//需要滚动的区域id
				speed:50 //滚动速度
			},
			settings = $.extend(defaults,options);
			
			var area = $(settings.dom),
				contH = area.find('ul:eq(0)').height(),
				contClone = area.find('ul:eq(0)').clone(),
				i = 0;
			area.append(contClone);

			function scroll_up() {
				//(area.scrollTop() >= contH) ? area.scrollTop(0) : area.scrollTop(i++);
				if (area.scrollTop() >= contH) {
					i=0;
					area.scrollTop(0);
				}else{
					area.scrollTop(i++);
				}
			}

			var timer = setInterval(scroll_up,settings.speed);

			area.on('mouseover', function(event) {
				clearInterval(timer);
			});
			area.on('mouseout', function(event) {
				timer = setInterval(scroll_up,settings.speed);
			});
		}
	});
	
})(jQuery);