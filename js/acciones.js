// JavaScript Document
var panel='<div  data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"><img src="imag/casa-de-terror1.jpg" width="210" height="210"><div data-role="controlgroup"><a data-role="button" href="#page">Principal</a><a data-role="button" href="#page2" >Tipos De Tortura</a><a data-role="button" href="#page3" >Herramientas De Tortura</a></div></div> </div>';

  $(document).on('pagebeforecreate','[data-role=page]',function () {
	if($(this).find('[data-role=panel]').length===0)
	{$('[data-role=header]').before(panel);}

});//before create
$(document).ready(function(e) {
});//ready

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
 });
 },false); //deviceready
 }); //document ready

