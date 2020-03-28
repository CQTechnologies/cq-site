const getZuiTableBodyRow = (bodyItem, idx) => `
	<tr>
  	<td scope="row">${bodyItem.itemName}</td>
    ${bodyItem.data.map(d => `<td>${d}</td>`).join('')}
	</tr>
`
const targetPriceTable = document.getElementById('pricing-table');
const tableHeadingHtml = `<thead><tr>${tableJsonData.headings.map((h, idx) => `
<th scope="col"><span>${h}</span></th>`).join('')}</tr></thead>`;
const tableBodyHtml = `<tbody>${tableJsonData.body.map(getZuiTableBodyRow).join('')}</tbody>`

console.log(tableHeadingHtml)
console.log(tableBodyHtml)

targetPriceTable.innerHTML  = `${tableHeadingHtml}${tableBodyHtml}`;