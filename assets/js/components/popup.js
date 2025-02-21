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

    const dimensions = {
        small: { width: 600, height: 500 },
        medium: { width: 800, height: 500 },
        large: { width: 1440, height: 1080 }
    };
    const { width, height } = dimensions[size] || dimensions.large;
    
    openPopupWindow(url, width, height, `Popup${size}`);
}

export function openPopupWindow(url, width, height, popupName = 'Popup') {
    const left = (window.screenLeft || window.screenX) + (window.innerWidth - width) / 2;
    const top = (window.screenTop || window.screenY) + (window.innerHeight - height) / 2;

    const features = `width=${width},height=${height},top=${top},left=${left},status=no,menubar=no,scrollbars=auto,toolbar=no,location=no,titlebar=no,resizable=yes`;
    const popup = window.open(url, popupName, features);
}

// 사이즈 지정
export function openCenteredPopup(url, width, height) {
    const left = (window.screenLeft || window.screenX) + (window.innerWidth - width) / 2;
    const top = (window.screenTop || window.screenY) + (window.innerHeight - height) / 2;

    const features = `width=${width},height=${height},left=${left},top=${top},status=no,menubar=no,scrollbars=auto,toolbar=no,location=no,titlebar=no,resizable=yes`;
    const popup = window.open(url, '_blank', features);
}
