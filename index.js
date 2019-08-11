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

	// Event listener to add an item
	$('#js-shopping-list-form').submit(function(e){
		e.preventDefault();
		addItem($('#shopping-list-entry'), $('.shopping-list'));
	});

});