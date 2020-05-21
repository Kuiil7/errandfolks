$(document).ready(function() {


	  
	  $.ajax({
		url: 'http://covidtracking.com/api/us',
		dataType: 'json',
		success: function(data) {
		  console.log(data);
		 $("#lastmodified").text(moment(data[0].lastModified).format("LL"));
		  $('#positive').html( data[0].positive);
		  $('#negative').html( data[0].negative);
		  $('#pending').html( data[0].pending);
		  $('#CurrHosp').html(data[0].hospitalizedCurrently);
		  $('#CurrOnVent').html( data[0].onVentilatorCurrently);
		  $('#recovered').html(data[0].recovered);
		  $('#hospitalized').html( data[0].hospitalized);
		  $('#death').html( data[0].death);
		  $('#total').html(data[0].total);



		}
	  })
});



