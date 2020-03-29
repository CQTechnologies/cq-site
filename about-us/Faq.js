const faqJsonData = import('./FAQ.json')

const targetAccordianElem = document.getElementById('accordion');
let finalFaqOutput = '';

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


const faqGrouped = groupByJsonData(faqJsonData, 'category');

for (let key of Object.keys(faqGrouped)) {
    finalOutput += `
        <div class="panel panel-default">
            ${faqGrouped[key].map((el, idx) =>
                el.showInShortFaqs === true ? `<div class="panel-heading">
                    <h5 class="panel-title"><a class="accordion-toggle collapsed-icon" data-toggle="collapse" data-parent="#accordion" href="#collapse${idx}">
                        <span class="icon gfx-star-4 iconleft"></span>${el.title}</a>
                    </h5>
                </div>
                <div id="collapse${idx}" class="panel-collapse collapse in">
                    <div class="panel-body">${el.description}</div>
                </div>`
            : '').join('')}
        </div>`;
}

console.log('Output', finalOutput);
targetAccordianElem.innerHTML = finalFaqOutput;