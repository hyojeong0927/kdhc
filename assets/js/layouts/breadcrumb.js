const breadcrumb = document.querySelector("nav.breadcrumb-wrap");

const breadcrumbData = [
  { name: 'depth01', url: '#' },
  { name: 'depth02', url: '', active: true }
];

const breadcrumbItems = breadcrumbData.map(item => {
  if (item.active) {
    return `<li class="breadcrumb-item active" aria-current="page">${item.name}</li>`;
  } else {
    return `<li class="breadcrumb-item"><a href="${item.url}">${item.name}</a></li>`;
  }
}).join('');

// breadcrumb.innerHTML = `
//   <nav id="breadcrumb" class="breadcrumb-wrap" aria-label="breadcrumb">
//     <ol class="breadcrumb">
//       ${breadcrumbItems}
//     </ol>
//   </nav>
// `;