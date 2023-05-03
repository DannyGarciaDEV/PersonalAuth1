var matched = document.getElementsByClassName("fa-check");
var trash = document.getElementsByClassName("fa-trash");

Array.from(matched).forEach(function(element) {
      element.addEventListener('click', function(){
       
        const name = this.parentNode.parentNode.childNodes[1].innerText
        
        const penPal = this.parentNode.parentNode.childNodes[3].value
        console.log('itWorks', this, name, penPal)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            
            'newMatch': penPal
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const penPal = this.parentNode.parentNode.childNodes[3].value
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
          
            'matched': penPal
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


var video = document.getElementById('video');
var toggleButton = document.getElementById('toggleButton');
var stream;

 const constraints = {
  video: { width: 20, height: 10 }
 };

 navigator.mediaDevices.getUserMedia(constraints)
  .then(mediaStream => {
   const videoElement = document.getElementById('video');
    videoElement.srcObject = mediaStream;
     videoElement.play();
   })
  .catch(error => {
   console.error('getUserMedia() error:', error);
 });
// function toggleWebcam() {
//   if (stream) {
//     stream.getTracks().forEach(function(track) {
//       track.stop();
//     });
//     video.style.display = 'none';
//     toggleButton.textContent = 'Turn On Webcam';
//     stream = null;
//   } else {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(function(newStream) {
//         stream = newStream;
//         video.srcObject = stream;
//         video.style.display = 'block';
//         toggleButton.textContent = 'Turn Off Webcam';
//       })
//       .catch(function(error) {
//         console.log('Error accessing webcam:', error);
//       });
//   }
// }

