export function setupPopupListeners(urlList) {
    document.addEventListener('DOMContentLoaded', () => {
        const sizes = ['small', 'medium', 'large'];

        sizes.forEach(size => {
            const button = document.getElementById(`${size}-btn`);
            if (button) {
                button.addEventListener('click', () => openPopup(size, urlList));
            }
        });
    });
}

export function openPopup(size, urlList) {
    const url = urlList[size];

    if (!url) {
        alert('잘못된 크기 선택입니다.');
        return;
    }

    let width = 1440, height = 1080;

    if (size === 'small') {
        width = 600;
        height = 590;
    } 
    else if (size === 'medium') {
        width = 800;
        height = 438;
    }

    openPopupWindow(url, width, height, `Popup${size}`);
}

export function openPopupWindow(url, width, height, popupName = 'Popup') {
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    const features = `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes,toolbar=no,location=no,titlebar=no`;
    const popup = window.open(url, popupName, features);

    if (popup) {
        popup.onload = () => {
            popup.resizeTo(width, height);
        };
        console.log(`${popupName} 팝업 창이 성공적으로 열렸습니다.`);
    } else {
        console.error('팝업이 차단되었습니다.');
    }
}

// 팝업 사이즈 외부에서 지정
export function openCenteredPopup(url, width, height) {
    
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
   
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
   
    const features = `width=${width},height=${height},left=${left},top=${top}`;
    
    window.open(url, '_blank', features);
}

// 팝업 세로 사이즈 유동적
export function openAutoPopup(url, width=800) {
    // let url = 'https://example.com';

    // let width = 800;
    let initialHeight = 263;
    let maxHeight = 502;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const left = (screenWidth - width) / 2;
    const top = (screenHeight - height) / 2;

    const features = window.open(url, 'popupWindow', `width=${width},height=${initialHeight},left=${left},top=${top}, scrollbars=auto`);

    if (popup) {
        popup.onload = function () {
            const contentHeight = popup.document.body.scrollHeight;
            const calculatedHeight = Math.min(contentHeight + 50, maxHeight);
            popup.resizeTo(width, calculatedHeight);
        };
    } else {
        console.error('팝업이 차단되었습니다.');
    }
}