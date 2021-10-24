const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select the media stream, pass to video elementm, then play 

async function SelectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        //  Catch Error Here
        console.log('This is the error, error here:', error); 
    }
}

button.addEventListener('click', async ()=>{
    //  Disable Button
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture(); 
    // Reset Button
    button.disabled = false;
}); 

// On Load

SelectMediaStream();