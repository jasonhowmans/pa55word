/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   @Project: PA55WORD - A simple password generator bookmarklet 
	 @File: bookmarklet.js
	 @Version: 0.2
   
	 Created by Jason Howmans (jasonhowmans.com) 2011.
	 This software is open source, you can use it and improve it as you wish.
	 Fork this project on GitHub: github.com/jasonhowmans/pa55word
	 ----------------------------------------------------------------------
	 This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Pull in jQuery & Initiate
   -------------------------------------- */
if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=bookmarklet;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	bookmarklet();
}

/* Everything happens through this function
   -------------------------------------- */
function bookmarklet() {
	// Append UI to body
	$('body').append('<div id="pa55word" style="background: black; background: rgba(0,0,0,0.8); display: none; height: auto; left: 0px; padding: 10px 0; position: absolute; top: 0px; width: 100%; z-index: 9999;"><input id="p55Code" style="background: transparent; border: none; color: white; font: 18px monospace; outline: none; padding: 0; text-align: center; width: 100%;" value="Generated Password"></div>');
	$('#pa55word').slideDown(200);
	$('#pa55word').append('<a href="#" id="pa55wordClose" style="color: white; display: block; font: 20px monospace; opacity: 0.4; padding: 10px 20px; position: absolute; right: 0; text-decoration: none; top: 0;">x</a>');
	
	// Generate password and select it
	$('#pa55word input#p55Code').val(generatePassword(8));
	$('#pa55word input#p55Code').focus();
	$('#pa55word input#p55Code').select();
	
	// Close button effects
	$('#pa55word a#pa55wordClose').hover(function() { $(this).css('opacity', '1'); }, function() { $(this).css('opacity', '0.4'); });
	
	// Close and remove from DOM without a trace
	$('#pa55word a#pa55wordClose').click(function() { 
		$('#pa55word').slideUp(100).remove(); 
		P55didFinishLoading = undefined; 
		p55n = undefined;
		$('script#p55n').remove(); 
	});
	
	return false;
}

/* Password Generate Algorithm
   -------------------------------------- */
function generatePassword(passLength) {
	var p = ''; var ch;
	var charHash = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','_','*','!','@','&','^','$','$'];
	for (var i=0; i<=passLength; i++) {
		ch = Math.floor(Math.random()*charHash.length);
		p += String(charHash[ch]);
	}
	return p;
}

// Finish everything off
var P55didFinishLoading = true;