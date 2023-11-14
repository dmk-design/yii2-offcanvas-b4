/*!
 * Off Canvas
 * =================================
 * Use for dmkdesign/yii2-ajaxcrud extension
 * @author Aaron Kennedy aaron@dmkdesign.ca
 * Thanks to Amit at https://fellowtuts.com/html-css/off-canvas-menu-sidebar-overlay/ 
 */

	var bsOverlay;

	// function OffCanvas(canvasId, options={})
	// {
	// 	this.defaults = {
	// 		insertBackdrop: true,
	// 	};

	// 	this.selector = canvasId;
	// 	this.canvas = $("#"+canvasId);

	// 	this.dialog = $(canvasId).find('.offcanvas-dialog');

	// 	this.header = $(canvasId).find('.offcanvas-header');

	// 	this.content = $(canvasId).find('.offcanvas-body');

	// 	this.footer = $(canvasId).find('.offcanvas-footer');

	// 	this.insertBackdrop = function()
	// 	{
	// 		$('body').prepend('<div class=\"bs-canvas-overlay bg-dark position-fixed w-100 h-100\"></div>');
	// 		bsOverlay = $('.bs-canvas-overlay');
	// 	}

	// 	this.show = function()
	// 	{
	// 		bsOverlay = $('.bs-canvas-overlay');
	// 		this.canvas.addClass('mr-0');
	// 		$(this.selector + ' .bs-canvas-close').attr('aria-expanded', "true");
	// 		$('[data-target="' + this.selector + '"], a[href="' + this.selector + '"]').attr('aria-expanded', "true");
	// 		if(bsOverlay.length)
	// 			bsOverlay.addClass('show');
	// 		return false;
	// 	}

	// 	this.hide = function()
	// 	{
	// 		elm.removeClass('mr-0');
	// 		$('.bs-canvas-close', elm).attr('aria-expanded', "false");
	// 		if(bsOverlay.length)
	// 			bsOverlay.removeClass('show');
	// 	}

	// 	 /**
    //  * Set modal content
    //  * @param {string} content The content of modal content
    //  */
	// 	 this.setContent = function (content) {
	// 		$(this.content).html(content);
	// 	};
	
	// 	/**
	// 	 * Set modal footer
	// 	 * @param {string} content The content of modal footer
	// 	 */
	// 	this.setFooter = function (content) {
	// 		$(this.footer).html(content);
	// 	};
	
	// 	/**
	// 	 * Set modal title
	// 	 * @param {string} title The title of modal
	// 	 */
	// 	this.setTitle = function (title) {
	// 		// remove old title
	// 		$(this.header).find('h4.modal-title').remove();
	// 		// add new title
	// 		$(this.header).append('<h4 class="modal-title">' + title + '</h4>');
	// 	};
	// }
	
	
//these can't be used for instances of offCanvas but we should override them in the code that creates the instance.
	$('[data-toggle="canvas"]').on('click', function(){
		var ctrl = $(this), 
			elm = ctrl.is('button') ? ctrl.data('target') : ctrl.attr('href');
		//offCanvas = new OffCanvas(elm); //we should have this defined already
		//offCanvas.show();
		$(elm).addClass('mr-0');
		$(elm + ' .bs-canvas-close').attr('aria-expanded', "true");
		$('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "true");
		if(bsOverlay.length)
			bsOverlay.addClass('show');
		return false;
	});
	
	$(document).off('click', '.bs-canvas-close, .bs-canvas-overlay').on('click', '.bs-canvas-close, .bs-canvas-overlay',function(){
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

