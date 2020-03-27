const getZuiTableBodyRow = (bodyItem) => `
	<tr>
  	<td>${bodyItem.itemName}</td>
    ${bodyItem.data.map(d => `<td>${d}</td>`).join('')}
	</tr>
`
const targetPriceTable = document.getElementById('price-table');
const tableHeadingHtml = `<thead><tr>${tableJsonData.headings.map((h, idx) => `
<th><span>${h}</span></th>`).join('')}</tr></thead>`;
const tableBodyHtml = `<tbody>${tableJsonData.body.map(getZuiTableBodyRow).join('')}</tbody>`

console.log(tableHeadingHtml)
console.log(tableBodyHtml)

targetPriceTable.innerHTML  = `${tableHeadingHtml}${tableBodyHtml}`;