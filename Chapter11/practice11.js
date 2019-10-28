//ACCORDIONS
/*$('.accordion').on('click', '.accordion-control', function(e){
  e.preventDefault();                    
  $(this)                              
    .next('.accordion-panel')           
    .not(':animated')                    
    .slideToggle();                      
});*/

//TAB PANELS
$('.tab-list').each(function(){                  
  var $this = $(this);                        
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { 
    e.preventDefault();                          
    var $link = $(this),                   
        id = this.hash;                       

    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active 
    }
  });
});
