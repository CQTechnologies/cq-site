const mappedMethodologyData = methodologyJsonData.map((d) => (
    `<div class="row methodology-details-wrapper">
        <div class="col-sm-2"><img src="./ico/methodology/${d.iconFile}" style="width: 60px;height: auto;" /></div>
        <div class="col-sm-10">
            <p>
                <span>${d.textHtml}</span>
            </p>
        </div>
    </div>`
)).join(' ');

console.log('[Methodology-Details]', mappedMethodologyData);
const targetMethodologyDetails = document.getElementById('target-methodology-details');
targetMethodologyDetails.innerHTML = mappedMethodologyData;