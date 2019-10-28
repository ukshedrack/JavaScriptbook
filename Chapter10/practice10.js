//BREAKPOINT
/*var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;      
  }

  $form.append('<p>' + area + '</p>');
});*/


//THROW ERROR FOR NAN
var width = 12;                                     
var height = 'test';                               
function calculateArea(width, height) {
  try {
    var area = width * height;                     
    if (!isNaN(area)) {                             // If it is a number
      return area;                                  // Return the area
    } else {                                        
      throw new Error('calculateArea() received invalid number');
    }
  } catch(e) {                                     // If there was an error
    console.log(e.name + ' ' + e.message);          // Show error in console
    return 'We were unable to calculate the area.'; // Show users a message
  }
}
document.getElementById('area').innerHTML = calculateArea(width, height);