// $(':header').addClass('headline');
// $('li:lt(3)').hide().fadeIn(1500);
// $('li').on('click', function() {
//   $(this).remove();
// });

// Getting Element's content
// $(document).ready(function(){
// 	console.log($('ul').html());
// 	console.log($('ul').text());
// 	console.log($('li').text());
// });

// $(document).ready(function(){
// 	var $listHTML = $('ul').html();
// 	$('ul').append($listHTML);
// });

// .Each() method
$('li').each(function(){
	var ids = this.id;
	$(this).append('<em class="order">' + ' ' + ids + '</em>');
});

// Event Methods
