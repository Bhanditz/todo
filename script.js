var text;
var listNumber = 0;

$(document).ready(function() {
	$('#addButton').click(function() {
		if($('#textbox').val() != '') {
			text = $('#textbox').val();
			createListItem();
			$('#textbox').val('');
			listNumber++;
			$('#number').text(listNumber);
		}
	})
	$('#textbox').live('keypress', function(e) {
		if(e.keyCode == 13) {
			if($('#textbox').val() != '') {
				text = $('#textbox').val();
				createListItem();
				$('#textbox').val('');
				listNumber++;
				$('#number').text(listNumber);
			}
		}
	})
	$(document).on('click', '.done', function() {
		$(this).toggleClass('hidden');
		$(this).parent().addClass('strike').delay(1000).fadeOut("slow");
		listNumber--;
		$('#number').text(listNumber);
	})
})


function createListItem() {
	$('#list').append('<div class="listItem"><li>' + text + '</li> <button class="done">Done</button></div>');
}