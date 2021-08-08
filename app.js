const videoElement = document.querySelector("#video");
const button = document.querySelector("#button")

//async function
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            //videoElement.removeAttribute("hidden")
            videoElement.play()
        }
    } catch (error) {
        console.log(error)
    }
}
selectMediaStream();
button.addEventListener("click", async() => {
    //DISABLE button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
// button.addEventListener('click', async() => {
//     videoElement.muted = true;
//     videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
//     videoElement.play();
//     videoElement.addEventListener('loadedmetadata', () => {
//         videoElement.requestPictureInPicture()
//             //.catch(console.error)
//     });
// });
// if (document.pictureInPicture) {
//     console.log("Yes")
// }