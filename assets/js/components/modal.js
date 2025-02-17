// -------------------------------------------------------- //
// layer popup
//-------------------------------------------------------- //
export function openPopup(size, urlList) {
    const url = urlList[size];

    let width, height;

    if (size === 'small') {
        width = 600;
        height = 200;
    } else if (size === 'medium') {
        width = 800;
        height = 400;
    }

    openPopupWindow(url, width, height, `Popup${size}`);
}

export function setupModalListeners(urlList) {

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('small-btn').addEventListener('click', () => openPopup('small', urlList));
        document.getElementById('medium-btn').addEventListener('click', () => openPopup('medium', urlList));
    });

}