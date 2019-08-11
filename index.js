$(function(){
	// input field - #shopping-list-entry
	// form - #js-shopping-list-form
	// actual list - .shopping-list

	// Code is broken down into functions for expandability later if desired.
	// Add an item
	function addItem(inputField, list){
		if(inputField.val() === ''){
			alert("You must enter a shopping list item");
			return;
		}
		list.append(`
			<li>
        <span class="shopping-item">${inputField.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
		`);
		inputField.val('');		
	}

	// button to remove item - .shopping-item-delete
	// Remove an item
	function removeItem(item){
		item.closest('li').remove();
	}

	// Toggle if item is checked or unchecked
	function toggleItemState(item){
		item.closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	}

	// Event listener to add an item
	$('#js-shopping-list-form').submit(function(e){
		e.preventDefault();
		addItem($('#shopping-list-entry'), $('.shopping-list'));
	});

	// Event listener using event delegation to remove an item
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		removeItem($(this));
	});

	// Event listener using event delegation to apply/remove a class when user checks or unchecks item
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		toggleItemState($(this));
	});
});