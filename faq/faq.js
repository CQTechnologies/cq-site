// Accepts the array and key
const groupByJsonData = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

const copyFaqLinkToClipboard = (el) => {
    console.log(el);
    const link = el.href;
    console.log('[LinkText]', link);
    navigator.clipboard.writeText(link).then();
    return false;
};

const getShortFaqPanel = (el, idx, accordianId) => {
    const iKey = el.title.replace(/\s+/g, '-').toLowerCase();
    return (el.showInShortFaqs === true ? `<div class="panel-heading">
    <h5 class="panel-title" style="position:relative">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-${accordianId}-${idx}">
            <span class="icon iconleft">Q:</span>${el.title}
        </a>
        <a href="http://cqtechnologies.com/faq/#${iKey}" target="_blank" style="position:absolute;right:0;top:0;" onclick="return copyFaqLinkToClipboard(this);">
            Link
        </a>
    </h5>
    </div>
    <div id="collapse-${accordianId}-${idx}" class="panel-collapse collapse ${!idx && 'in'}">
        <div class="panel-body">${el.description}</div>
    </div>`: '')
};

const getFullFaqPanel = (el, idx, accordianId) => {
    const iKey = el.title.replace(/\s+/g, '-').toLowerCase();
    const expanded = (`#${iKey}` === location.hash ? 'in': '');
    return ( `<div id=${iKey} class="panel-heading">
    <h5 class="panel-title" style="position:relative">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-${accordianId}-${idx}">
            <span class="icon iconleft">Q:</span>${el.title}
        </a>
        <a href="http://cqtechnologies.com/faq/#${iKey}" target="_blank" style="position:absolute;right:0;top:0;" onclick="return copyFaqLinkToClipboard(this);">
            Link
        </a>
    </h5>
    </div>
    <div id="collapse-${accordianId}-${idx}" class="panel-collapse collapse ${expanded}">
        <div class="panel-body">${el.description}</div>
    </div>`)
};

const setFaq = (short) => {
    const targetAccordianElem = document.getElementById('accordion');
    let faqGrouped = groupByJsonData(faqJsonData, 'category');
    let finalFaqOutput = '';
    let accordianId = 0;
    if (targetAccordianElem && faqGrouped) {
        if (short) {
            const [cat1, cat2] = Object.keys(faqGrouped);
            faqGrouped = {
                [cat1]: faqGrouped[cat1].slice(0, 2) || [],
                [cat2]: faqGrouped[cat2].slice(0, 2) || []
            }
        }
        for (let key of Object.keys(faqGrouped)) {
            accordianId++;
            finalFaqOutput += `
                <div class="panel panel-default">
                  <p class="lead">${key}</p>
                    ${faqGrouped[key].map((el, idx) => short ? getShortFaqPanel(el, idx, accordianId): getFullFaqPanel(el, idx, accordianId)).join('')}
                </div>`;
        }
        targetAccordianElem.innerHTML = finalFaqOutput;
    }
}