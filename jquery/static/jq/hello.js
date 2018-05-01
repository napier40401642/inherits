$(document).ready(function()
{
	alert("Hello World")
});

$(function()
{
	var msg=$('<div>Hello World</div>');
	$('body').prepend(msg);
		$('body').prepend(msg);
});



$(function()
{
	var gb=$('<div id="gid">');
	var mg=$('<img>');
	gb.append($('<div>',{text:'Great Britain'}));
	gb.append($('<img>',{src:'file:///C:/Users/ASUS/WEB/world/static/flags/gb.gif'}));
	// gb.append($('<img>',{width:'200px',background:"yellow",border:"3px solid black",src:'file:///C:/Users/ASUS/WEB/world/static/flags/gb.gif'}));
	$('#countries').append(gb);
	// $('#countries').attr("id","gid"); //add id name or class name with attr (----)

});

$(function()
{
	$("#fr img").css
	({
		background:"yellow",
		border:"3px solid black",
		width:"200px"
	})
});

$(function()
{
	$("#gid img").css
	({
		background:"yellow",
		border:"3px solid red",
		width:"200px"
	})
});

$(function()
{
	$('#fi img').css
	({
		background:"yellow",
		border:"3px solid black",
		width:"200px"

	})
});

$(function()
{
	var elem=$('<div>');
	elem.html('An example element');
	elem.css('border','solid blue');
	elem.css('width','200px');
	$('body').append(elem);
});

$(function()
{
	 $('p:first-child').css('border','solid red');//identifies the first p in each block
	 $('p:nth-child(1)').css('border','solid black');//select the first child in each block
	$('p:eq(1)').css('border','solid green');//
	 $('p:last').css('border','solid blue');
 	//$('p').css('border','solid');
});

$(function()
{
	var ca=
	{
		cname:"AJ Cumming",
		caddress:
		{
			street:"10 Co Rd",
			town:"Edinburgh",
			post_code:"EH1234"
		},
		transaction:
		[
			{whn:"2014-01-11",nar:"Cash Withdrawal",ant:-100},
			{whn:"2014-01-11",nar:"Bus fare",amt:-35}
		]
	};
	alert(ca.transaction[1].nar);
});

$(function()

{
	$('#key th').css('color','red')
	$('#key').css('background-color','lavender')
	$('body').prepend($('<div>',{text:'hello kk',css:{color:'blue'}}));

});

