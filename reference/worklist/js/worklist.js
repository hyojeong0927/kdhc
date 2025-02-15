// work data
import { projects } from './data/index.js';

// 
const projStateSelect = document.getElementById("projState");
const projCategorySelect = document.getElementById("projCategory");
const tableBody = document.querySelector("tbody");
const projCount = document.querySelector(".projCount");
const layerPopup = document.getElementById("layerPopup");
const popupIframe = document.querySelector(".popup-iframe");
const closeButton = document.querySelector(".popup-close");
const popupOverlay = document.querySelector(".popup-overlay");
const projDesignTurnSelect = document.getElementById("projDesignTurn");
const projDevStartSelect = document.getElementById("projDevStart");
const projPubStartSelect = document.getElementById("projPubStart");
const projModDateSelect = document.getElementById("projModDate");

// filter work list
function renderTable(filterState = "전체", filterCategory = "전체", filterPubStart = "전체", filterDevStart = "전체", filterDesignTurn = "전체", filterModDate = "전체") {
    console.log(projects); 

    const filteredProjects = projects.filter(project => {
        const stateMatch = filterState === "전체" || project.status === filterState;
        const categoryMatch = filterCategory === "전체" || project.depth1 === filterCategory;
        const pubStartMatch = filterPubStart === "전체" || project.start === filterPubStart;
        const devStartMatch = filterDevStart === "전체" || project.dev === filterDevStart;
        const designTurnMatch = filterDesignTurn === "전체" || project.design === filterDesignTurn;
        const modDateMatch = filterModDate === "전체" || project.modDate === filterModDate;

        return stateMatch && categoryMatch && pubStartMatch && devStartMatch && designTurnMatch && modDateMatch;;
    });
    
    tableBody.innerHTML = filteredProjects.map((project, index) => {
        return `
            <tr class="${project.status}">
                <td class="center">${index + 1}</td>
                <td>${project.id}</td>
                <td>${project.depth1}</td>
                <td>${project.depth2}</td>
                <td>${project.depth3}</td>
                <td class="center">${project.type}</td>
                <td class="center">${project.folder}</td>
                <td class="center"><a href="../../html/${project.folder}/${project.file}" target="_blank">${project.file}</a></td>
                <td class="center ${
                    project.status === '진행중' ? 'ing' :
                    project.status === '완료' ? 'comp' : ''
                }">${project.status}</td>
                <td class="center">${project.start}</td>
                <td class="center">${project.end}</td>
                <td class="center modi">${project.modDate}</td>
                <td class="center">${project.design}</td>
                <td class="center">${project.dev}</td>
                <td class="center"><button class="history-btn">View</button></td>
            </tr>
        `;
    }).join(''); 

    updateCounts(filteredProjects);
}

projStateSelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value);
});

projCategorySelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value);
});

projPubStartSelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value);
});


projDesignTurnSelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value);
});

projDevStartSelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value);
});

projModDateSelect.addEventListener("change", () => {
    renderTable(projStateSelect.value, projCategorySelect.value, projPubStartSelect.value, projDevStartSelect.value, projDesignTurnSelect.value, projModDateSelect.value);
});

// top button
document.querySelector(".btn-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// popup
tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("history-btn")) {
        const projectId = event.target.closest("tr").querySelector("td:nth-child(2)").textContent;

        document.querySelector(".popup-title").textContent = `ID: ${projectId}`;
        popupIframe.src = `./popup/${projectId}.html`;
        layerPopup.classList.remove("hidden");
    }
});

function closePopup() {
    layerPopup.classList.add("hidden");
    popupIframe.src = "";
}

closeButton.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

// counter
function updateCounts(filteredProjects) {
    const total = projects.length;
    const modiCount = projects.filter(p => p.modDate).length;
    
    const counts = {
        전체: total,
        진행대기: projects.filter(p => p.status === "진행대기").length,
        진행중: projects.filter(p => p.status === "진행중").length,
        완료: projects.filter(p => p.status === "완료").length,
        // 수정: projects.filter(p => p.status === "수정").length,
        보류: projects.filter(p => p.status === "보류").length,
        제외: projects.filter(p => p.status === "제외").length,
        수정: modiCount,
    };

    const modiProjects = projects.filter(p => p.modDate);
    
    const latestModDate = modiProjects.length > 0 
        ? modiProjects.reduce((latest, project) => {
            const modDate = new Date(project.modDate);
            return modDate > latest ? modDate : latest;
        }, new Date(0)) 
        : null;

    const formattedModDate = latestModDate ? latestModDate.toLocaleDateString() : "없음";

    projCount.innerHTML = `
        <span>전체<br /><i>${counts.전체}</i>건</span>
        <span>진행대기<br /><i>${counts.진행대기}</i>건(${((counts.진행대기 / total) * 100).toFixed(1)}%)</span>
        <span class="box-ing">진행중<br /><i class="ing">${counts.진행중}</i>건(${((counts.진행중 / total) * 100).toFixed(1)}%)</span>
        <span class="box-comp">완료<br /><i class="comp">${counts.완료}</i>건(${((counts.완료 / total) * 100).toFixed(1)}%)</span>
        <span class="box-modi">수정<br /><i class="modi">${counts.수정}</i>건</span>
        <span class="box-modi">최신 수정일<br /><i class="modi">${formattedModDate}</i></span>

        <span>보류<br /><i>${counts.보류}</i>건(${((counts.보류 / total) * 100).toFixed(1)}%)</span>
        <span>제외<br /><i>${counts.제외}</i>건(${((counts.제외 / total) * 100).toFixed(1)}%)</span>
        <span>표시된<br /><i>${filteredProjects.length}</i>건</span>
    `;
}

renderTable();