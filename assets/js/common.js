// -------------------------------------------------------- //
// window popup
//-------------------------------------------------------- //
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
// window popup end

// -------------------------------------------------------- //
// 
//-------------------------------------------------------- //

// end