$(document).ready(function() {
	$('#button').click(function(){
		r = confirm("Confirm that you want to reset");
		if (r == true) {
		$('tr').remove();
		$('#inputHeight').val('1');
		$('#inputWeight').val('1');
		
}
	});
	$('#sizePicker').submit(function(event) {
	  $('tr').remove();
      makeGrid();
	  changecolor();
      event.preventDefault();
    });
});
/* makeGrid Function create grid based on the user input*/
function makeGrid() {
    var height = $('#inputHeight').val();
    var weight = $('#inputWeight').val();
    var table = $('#pixelCanvas');
	var value = ""
	for(i=1;i<=height;i++){
		value+="<tr>"
	 for (l=1;l<=weight;l++){
		value+="<td id= il></td>"
	}}
   $(table).append(value+"/tr");
   }
 /*Changecolor function Changes the color of the cell clicked on to the color selected by the user*/
function changecolor(){
	$( "td" ).click(function() {
	var color = $('#colorPicker').val();
	$(this).css("background-color", color);
	$( "td" ).dblclick(function() {
	$(this).css("background-color", "white");
});
});
}