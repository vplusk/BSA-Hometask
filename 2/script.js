var App = {};

(function(App, $) {
	var $container,
		id = 0;

	App.init = function(){
		$container = $('#goods__container');

		$container.on('keypress', $.proxy(this.onAddItem, this));
		$container.on('dblclick', '.item-name', $.proxy(this.onChangeItemName, this));
		$container.on('click', '.remove-btn', $.proxy(this.onRemoveItem, this));
		$container.on('change', '.check-item', $.proxy(this.onCheckItem, this));
		$container.on('change', $.proxy(this.onCheckAllItems, this));
		$container.on('click', '#delete_all', $.proxy(this.onRemoveAllItems, this));
	}

	App.nextId = function() {
		return id++;
	}

	App.onAddItem = function(evt) {
		var $input = $('#goods__input');
		var newItemId = this.nextId();
		var newItemName = $input.val();
		var $newItem = $('<li id="' + newItemId + '" class="goods__item"></li>');
		
		$newItem.append('<div>' +
			'<input type="checkbox" class="check-item" data-item-id="' + newItemId + '" />' +
			'<input type="text" class="item-name" value="'+ newItemName +'" ' +
			'data-item-id="' + newItemId + '" readonly />' +
			'<a class="remove-btn" data-item-id="' + newItemId + '">&times;</a>'+
			'</div>'
		);

		if(evt.which == 13) {
			$('#goods__list').append($newItem);
			$input.val("");
		}
	};

	App.onChangeItemName = function(evt) {
		var $input = $('#' + $(evt.target).attr('data-item-id')).find('.item-name');
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

	App.onRemoveItem = function(evt) {
		$('#' + $(evt.target).attr('data-item-id')).remove();
	};

	App.onCheckItem = function(evt) {
		var $item = $('#' + $(evt.target).attr('data-item-id'));

		if($(evt.target).is(':checked')) {
			$item.addClass('checked');
		} else {
			$item.removeClass('checked');
		}
	};

	App.onCheckAllItems = function(evt) {
		var $items = $('.goods__item');
		var $checkboxes = $('.check-item');

		if($(evt.target).is(':checked')) {
			$items.addClass('checked');
			$checkboxes.prop('checked', 'true');
		} else {
			$items.removeClass('checked');
			$checkboxes.prop({checked: false});
		}
	};

	App.onRemoveAllItems = function() {
		$('.checked').remove();
		$('#check-all').prop({checked: false});
	};
})(App, jQuery);