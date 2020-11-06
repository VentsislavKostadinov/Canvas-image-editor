document.addEventListener('load', resizedDynamically);

function resizedDynamically() {
    window.addEventListener("resize", detectDevice)
}

detectDevice();

function detectDevice() {
    // * navigator - contains information about the browser
    // * maxTouches - is a property provided by navigator. It sets whether or not a connected device has s touch screen (mobile device)

    /* window.screen.orientation.angle (window object) - sets degree at which the browser's viewport is rotated and will return 0
    if mobile device is 'portrait', or 90 if it's 'landscape'
     */

    const detectDeviceObj = {
        device: navigator.maxTouchPoints ? 'is touchable - mobile/laptop-touch screen' : 'is not touchable/Computer',
        orientation: !navigator.maxTouchPoints ? 'orientation' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    }

    // update DOM
    let deviceText = document.querySelector('.device-text');
    let orientationText = document.querySelector('.orientation-text');



    deviceText.innerHTML = `Device: ${detectDeviceObj.device}`;
    orientationText.innerHTML = `Orientation: ${detectDeviceObj.orientation}`;
}


