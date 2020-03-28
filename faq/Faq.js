// Accepts the array and key
const groupByJsonData = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

const getShortFaqPanel = (el, key, idx) => {
    return (el.showInShortFaqs === true ? `<div id="file:///E:/CQ-Technologies-Projects/CQWebsite/cq-site/faq/index.html#${el.title.replace(/\s+/g, '-').toLowerCase()}" class="panel-heading">
    <h5 class="panel-title"><a class="accordion-toggle collapsed-icon" data-toggle="collapse" data-parent="#accordion" href="#collapse-${key}-${idx}">
        <span class="icon gfx-star-4 iconleft"></span>${el.title}</a>
    </h5>
    </div>
    <div id="collapse-${key}-${idx}" class="panel-collapse collapse ${!idx && 'in'}">
        <div class="panel-body">${el.description}</div>
    </div>`: '')
};

const getFullFaqPanel = (el, key, idx) => {
    return ( `<div id=${el.title.replace(/\s+/g, '-').toLowerCase()} class="panel-heading">
    <h5 class="panel-title"><a class="accordion-toggle collapsed-icon" href="#${el.title.replace(/\s+/g, '-').toLowerCase()}">
        <span class="icon gfx-star-4 iconleft"></span>${el.title}</a>
    </h5>
    </div>
    <div id="${el.title.replace(/\s+/g, '-').toLowerCase()}" class="panel-collapse collapse in">
        <div class="panel-body">${el.description}</div>
    </div>`)
};

// file:///E:/CQ-Technologies-Projects/CQWebsite/cq-site/faq/index.html
const setFaq = (short) => {
    const targetAccordianElem = document.getElementById('accordion');
    let faqGrouped = groupByJsonData(faqJsonData, 'category');
    let finalFaqOutput = '';
    if (targetAccordianElem && faqGrouped) {
        if (short) {
            const [cat1, cat2] = Object.keys(faqGrouped);
            faqGrouped = {
                [cat1]: faqGrouped[cat1].slice(0, 2) || [],
                [cat2]: faqGrouped[cat2].slice(0, 2) || []
            }
            console.log('[N]', faqGrouped);
        }
        for (let key of Object.keys(faqGrouped)) {

            finalFaqOutput += `
                <div class="panel panel-default">
                  <p class="lead">${key}</p>
                    ${faqGrouped[key].map((el, idx) => short ? getShortFaqPanel(el, key, idx): getFullFaqPanel(el, key, idx)).join('')}
                </div>`;
        }
        targetAccordianElem.innerHTML = finalFaqOutput;
    }
}

// let finalFaqOutput = '';
// for (let key of Object.keys(faqGrouped)) {
//     finalFaqOutput += `
//         <div class="panel panel-default">
//           <p class="lead">${key}</p>
//             ${faqGrouped[key].map((el, idx) =>
//                 el.showInShortFaqs === true ? `<div id=${el.title.replace(/\s+/g, '-').toLowerCase()} class="panel-heading">
//                     <h5 class="panel-title">
//                     <a class="accordion-toggle collapsed-icon" data-toggle="collapse" href="#collapse${idx}">
//                         <span class="icon gfx-star-4 iconleft"></span>${el.title}</a>
//                     </h5>
//                 </div>
//                 <div id="collapse${idx}" class="panel-collapse collapse in">
//                     <div class="panel-body">${el.description}</div>
//                 </div>`
//             : '').join('')}
//         </div>`;
// }

console.log('Output', finalFaqOutput);