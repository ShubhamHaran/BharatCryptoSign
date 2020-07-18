
var canvas=document.getElementById('signature-pad');
var signaturePad = new SignaturePad(canvas, {
  backgroundColor: 'rgba(0, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
var saveButton = document.getElementById('save');
var cancelButton = document.getElementById('clear');
if(saveButton){
saveButton.addEventListener('click', function (event) {
      // save canvas image as data url (png format by default)
      var image = canvas.toDataURL("image/png","_blank");//;  // here is the most important part because if you dont replace you will get a DOM 18 exception.
window.location.href=image;

});}
if(cancelButton){
cancelButton.addEventListener('click', function (event) {
  signaturePad.clear();
});
}