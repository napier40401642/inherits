
$(function()

{
	$('#tb1 th').css('color','red');
	// $('#tb1').css('background-color','lavender');
	$('#tb1 td').css({height:"50px",width:"93px"});
	$('.t1').css('background-color','gray')
	// $('.td1').css({color:"white",background-color:"gray"});

	$('table td:not(:empty)').mouseover(function()
{
	$(this).css('background','salmon');
});
	$('table td').mouseout(function()
{
	$(this).css('background','inherit');
});

});

$(function()

{
	$('#key th').css('color','red')
	$('#key').css('background-color','lavender')
	$('body').prepend($('<div>',{text:'hide key',css:{color:'blue',cursor:'pointer'},
		click:function()
		{
			// $('#key').toggle();
			if ($('#key:visible').length==1)
			{
				$('#key').fadeOut('slow');
				$(this).text('Show Key');

			}
			else
			{
				$('#key').fadeIn('slow');
				$(this).text('hide Key');
		}
		}
		}));

	$('body').prepend($('<div>',{text:'hide timetable',css:{color:'blue',cursor:'pointer'},
		click:function()
		{
			// $('#key').toggle();
			if ($('#tb1:visible').length==1)
			{
				$('#tb1').fadeOut('slow');
				$(this).text('Show timetable');

			}
			else
			{
				$('#tb1').fadeIn('slow');
				$(this).text('hide timetable');
		}
		}
		}));
	

});

