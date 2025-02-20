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

    const features = `width=${width},height=${height},top=${top},left=${left},status=no,menubar=no,scrollbars=auto,toolbar=no,location=no,titlebar=no,resizable=yes`;
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
    
    // const screenWidth = window.screen.width;
    // const screenHeight = window.screen.height;
   
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
   
    const features = `width=${width},height=${height},left=${left},top=${top}`;
    
    window.open(url, '_blank', features);
}

// 팝업 세로 사이즈 유동
export function openAutoPopup(url, width=800) {
    // const url = 'https://example.com';
    // const width = 800;
    const initialHeight = 600;
    const maxHeight = 800;

    // const screenWidth = window.screen.width;
    // const screenHeight = window.screen.height;
   
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
    
    const popup = window.open(`width=${width},height=${initialHeight},left=${left},top=${top},scrollbars=yes`);
    
    popup.onload = function() {
        const contentHeight = popup.document.body.scrollHeight;
        const calculatedHeight = Math.min(contentHeight + 50, maxHeight);
        popup.resizeTo(width, calculatedHeight);
    };

    window.open(url, '_blank', popup);

    // if (!popup) {
    //     alert('팝업 차단기가 활성화되어 있습니다. 팝업을 허용해주세요.');
    // }
}
