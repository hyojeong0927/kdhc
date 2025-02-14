// -------------------------------------------------------- //
// window popup
//-------------------------------------------------------- //
export function openPopup(size, urlList) {
    const url = urlList[size];

    if (!url) {
        alert('잘못된 크기 선택입니다.');
        return;
    }

    let width, height;

    if (size === 'small') {
        width = 300;
        height = 200;
    } else if (size === 'medium') {
        width = 600;
        height = 400;
    } else if (size === 'large') {
        width = 1440;
        height = 1080;
    }

    openPopupWindow(url, width, height, `Popup${size}`);
}

export function openPopupWindow(url, width, height, popupName = 'Popup') {
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    const features = `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`;
    const popup = window.open(url, popupName, features);

    if (popup) {
        console.log(`${popupName} 팝업 창이 성공적으로 열렸습니다.`);
    } else {
        console.error('팝업이 차단되었습니다.');
    }
}

export function setupPopupListeners(urlList) {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('large-btn').addEventListener('click', () => openPopup('large', urlList));
    });
}
// window popup end