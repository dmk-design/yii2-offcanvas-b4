/*!
 * Off Canvase
 * =================================
 * Use for dmkdesign/yii2-ajaxcrud extension
 * @author Aaron Kennedy aaron@dmkdesign.ca
 */
$(document).ready(function () {
	var bsOverlay = $('.bs-canvas-overlay');
	function showOffCanvas(selector)
	{
		bsOverlay = $('.bs-canvas-overlay');
		$(selector).addClass('mr-0');
		$(selector + ' .bs-canvas-close').attr('aria-expanded', "true");
		$('[data-target="' + selector + '"], a[href="' + selector + '"]').attr('aria-expanded', "true");
		if(bsOverlay.length)
			bsOverlay.addClass('show');
		return false;
	}

	$('[data-toggle="canvas"]').on('click', function(){
		var ctrl = $(this), 
			elm = ctrl.is('button') ? ctrl.data('target') : ctrl.attr('href');
		showOffCanvas(elm);
		return false;
	});
	
	$(document).on('.bs-canvas-close, .bs-canvas-overlay','click', function(){
		var elm;
		if($(this).hasClass('bs-canvas-close')) {
			elm = $(this).closest('.bs-canvas');
			$('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "false");
		} else {
			elm = $('.bs-canvas')
			$('[data-toggle="canvas"]').attr('aria-expanded', "false");	
		}
		elm.removeClass('mr-0');
		$('.bs-canvas-close', elm).attr('aria-expanded', "false");
		if(bsOverlay.length)
			bsOverlay.removeClass('show');
		return false;
	});
});
