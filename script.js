window.addEventListener('load', () => {
    scaleImage();

    // Call the scaleImage function whenever the browser is resized
    window.addEventListener('resize', scaleImage);
});

function scaleImage() {
    const image = document.querySelector('img');
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    // Get the dimensions of the browser window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the scale ratio for both width and height
    const widthScaleRatio = windowWidth / imageWidth;
    const heightScaleRatio = windowHeight / imageHeight;

    // Use the smaller of the two ratios to preserve the image's aspect ratio
    const scaleRatio = Math.min(widthScaleRatio, heightScaleRatio);

    // Set the new width and height for the image
    const newWidth = imageWidth * scaleRatio;
    const newHeight = imageHeight * scaleRatio;

    // Apply the new dimensions to the image
    image.style.width = `${newWidth}px`;
    image.style.height = `${newHeight}px`;
}

