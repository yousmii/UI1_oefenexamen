initPage();

function initPage() {
    // change images layout
    createLayoutSelection();

    //show thumb image by click
    const smallImageEls = document.querySelectorAll("#images img:not(:first-of-type)");
    for (const imageEl of smallImageEls) {
        imageEl.addEventListener("click", showImage);
        imageEl.style.cursor = "pointer";
    }
}

function createLayoutSelection() {
    const layoutSelectHtml =`
        <select id="changeLayout">
            <option value="top" selected>Top</option>
            <option value="bottom">Bottom</option>
        </select>
        `
    ;
    const imagesEl = document.getElementById("images");
    imagesEl.insertAdjacentHTML('beforebegin', layoutSelectHtml);

    const layoutSelectEl = document.getElementById("changeLayout");
    layoutSelectEl.style.margin = "1em";
    layoutSelectEl.addEventListener("change", changeLayout);
}

function changeLayout(event) {
    console.log("changeLayout");
    const imagesEl = document.getElementById("images");

    switch (event.currentTarget.value) {
        case "top":
            imagesEl.style.gridTemplateAreas = '"simage1 simage2 simage3" "bimage bimage bimage"';
            break;
        case "bottom":
            imagesEl.style.gridTemplateAreas = '"bimage bimage bimage" "simage1 simage2 simage3"';
            break;
    }
}

function showImage(event) {
    const imageEl = event.currentTarget;
    // get layout
    const largeImageEl = document.querySelector("#images img:first-of-type");

    // swap sources of images
    const currentLargeImageSrc = largeImageEl.src;
    largeImageEl.src = imageEl.src;
    imageEl.src = currentLargeImageSrc;
}