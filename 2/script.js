var myApp = {};

(function(myApp, $){
	var $container;
	var id = 1;

	myApp.init = function(){
		$container = $('#goods-container');

		$container.on('keypress','[id="add-product"]', $.proxy(this.onAddProduct, this));
		$container.on('change','[id="check-all"]', $.proxy(this.onCheckAllProducts, this));
		$container.on('click','[id="clear-all-btn"]', $.proxy(this.onClearProducts, this));
		$container.on('dblclick','[data-action="changeProductName"]', $.proxy(this.onChangeProductName, this));
		$container.on('change','[data-action="checkProduct"]', $.proxy(this.onCheckProduct, this));
		$container.on('click','[data-action="removeProduct"]', $.proxy(this.onRemoveProduct, this));
	};

	myApp.nextId = function(){
		return 'id' + id++;
	};

	myApp.onAddProduct = function(evt) {
		var $input = $('#add-product');
		var newProductId = this.nextId();
		var newProductName = $input.val();
		var $newProduct = $('<li id="' + newProductId + '" class="product"></li>');

		$newProduct.append('<div>' +
			'<input type="checkbox" class="check-product" data-action="checkProduct" data-product-id="' + newProductId + '" />' +
			'<input type="text" class="product-name" name="product' + newProductId + '" value="'+newProductName+'" ' +
			'data-action="changeProductName" ' + ' data-product-id="' + newProductId + '" readonly />' +
			'<a class="remove-btn" data-action="removeProduct" data-product-id="' + newProductId + '">&times;</a>'+
			'</div>'
		);

		if(evt.which == 13){
			$('#goods-list').append($newProduct);
			$input.val("");// clear input
		}
	};

	myApp.onChangeProductName = function(evt) {
		var $input = $('#' + $(evt.target).attr('data-product-id')).find('.product-name');
		var currentName = $input.val();
		var newName = "";

		$input.prop('readonly', false);

		$input.change(function() {
			newName = $(this).val();
		});

		$input.keyup(function(evt) {
			if(evt.which == 13){
				$(this).val(newName).prop('readonly', true);
			}
			if(evt.which == 27){
				$(this).val(currentName).prop('readonly', true);
			}
		});
	};

	myApp.onCheckProduct = function(evt) {
		var $product = $('#' + $(evt.target).attr('data-product-id'));
		console.log($product);
		console.log($(evt.target));
		if($(evt.target).is(':checked')) {
			$product.addClass('checked');
		} else {
			$product.removeClass('checked');
		}
	};

	myApp.onRemoveProduct = function(evt) {
		$('#' + $(evt.target).attr('data-product-id')).remove();
	};

	myApp.onCheckAllProducts = function(evt) {
		var $products = $('.product');
		var $checkboxes = $('.check-product');

		if($(evt.target).is(':checked')) {
			$products.addClass('checked');
			$checkboxes.prop('checked', 'true');
		} else {
			$products.removeClass('checked');
			$checkboxes.prop({checked: false});
		}
	};

	myApp.onClearProducts = function() {
		$('.checked').remove();
		$('#check-all').prop({checked: false});// update the view of the checkbox
	};

})(myApp, jQuery);
