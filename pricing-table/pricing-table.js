const getZuiTableBodyRow = (bodyItem, idx) => `
	<tr style="background-color:${idx%2==0 ? '#343a40': 'rgba(255,255,255,.05)'}">
  	<td scope="row">${bodyItem.itemName}</td>
    ${bodyItem.data.map(d => `<td>${d}</td>`).join('')}
	</tr>
`
const targetPriceTable = document.getElementById('pricing-table');
const tableHeadingHtml = `<thead><tr>${tableJsonData.headings.map((h, idx) => `
<th style="background-color:rgba(255,255,255,.05)" scope="col"><span>${h}</span></th>`).join('')}</tr></thead>`;
const tableBodyHtml = `<tbody>${tableJsonData.body.map(getZuiTableBodyRow).join('')}</tbody>`

const colWidth = `<colgroup>${tableJsonData.colWidth.map((width) => `<col width=${width}/>`).join('')}</colgroup>`;
console.log(colWidth);
console.log(tableHeadingHtml)
console.log(tableBodyHtml)

targetPriceTable.innerHTML  = `${colWidth}${tableHeadingHtml}${tableBodyHtml}`;