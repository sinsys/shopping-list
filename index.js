$(function(){

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

	// Remove an item
	function removeItem(item){
		item.closest('li').remove();
	}

	// Toggle if item is checked or unchecked
	function toggleItemState(item){
		// Avoid declaring this jQuery item multiple times
		let $itemTitle = item.closest('li').find('.shopping-item');
		// Toggle the class of the item title
		$itemTitle.toggleClass('shopping-item__checked');
		// Toggle the text within the button based on the item title's class
		item.find('span').text(updateButtonState($itemTitle.hasClass('shopping-item__checked')));
	}

	// Created as a helper to determine the state of the list item title
	// It is also created very simply to use for an initial load of the page to set button text states for already checked items
	function updateButtonState(itemState){
		return (itemState ? "uncheck" : "check");
	}

	/* When we load the page, we want to search through every .shopping-item.
	We are searching for it's sibling, which is a div that contains the buttons.
	We then find the button-label elements
	Then we only apply it to the first one it finds (to avoid also changing it's sibling of the delete button).
	And we apply our helper function updateButtonState to determine what value the button label should have */
	$(".shopping-item").each(function(i) {
		$(this).siblings('.shopping-item-controls').find('.button-label').first().text(updateButtonState($(this).hasClass('shopping-item__checked')));
	});
	
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
		toggleItemState($(this), $(this).find('.button-label'));
	});
});