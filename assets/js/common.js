'use strict'

// bootstrap
import "./vendors/bootstrap.bundle.min.js";
// ag grid
import "./vendors/ag-grid-community.min.js";
// datepicker
import "./components/datepicker.js";
// navigation
import "./components/nav.js";
// breadcrumb
import "./components/breadcrumb.js";
// title
import "./components/title.js";
// grid top button
import "./components/gridTopBtmGroup.js"
// bottom button
import "./components/btmbutton.js"
// input type file
// import "./components/inputFile.js"

// 윈도우 팝업일 경우 body 에 popup 클래스 추가
if (window.opener) {
    document.body.classList.add("popup");
}