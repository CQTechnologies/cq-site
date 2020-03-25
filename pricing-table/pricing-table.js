const getZuiTableBodyRow = (bodyItem) => `
	<tr>
  	<td class="zui-sticky-col">${bodyItem.itemName}</td>
    ${bodyItem.data.map(d => `<td>${d}</td>`).join('')}
	</tr>
`
const targetZuiTable = document.getElementById('zui-table');
const tableHeadingHtml = `<thead><tr>${tableJsonData.headings.map((h, idx) => `
<th class=${idx === 0 && 'zui-sticky-col'}>${h}</th>`).join('')}</tr></thead>`;
const tableBodyHtml = `<tbody>${tableJsonData.body.map(getZuiTableBodyRow).join('')}</tbody>`

console.log(tableHeadingHtml)
console.log(tableBodyHtml)

targetZuiTable.innerHTML  = `${tableHeadingHtml}${tableBodyHtml}`;