// input file
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file').addEventListener('change', function () {
        const fileName = this.files[0] ? this.files[0].name : '선택된 파일이 없습니다.';
        document.querySelector('.upload-name').value = fileName;
    });
});