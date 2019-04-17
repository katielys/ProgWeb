function renderTable(x){
	let table = document.createElement('table')
	let headTable = document.createElement('thead')
	
	// adiciona o cabeçalho da table
	table.appendChild(headTable)
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	td.innerHTML = `Produto de ${x}`
	td.colSpan = '2'
	tr.appendChild(td)
	headTable.appendChild(tr)

	let tbody = document.createElement('tbody')
	for(let i = 1; i<=10; i++){
		let trBody = document.createElement('tr')
		let tdBody1 = document.createElement('td')
		let tdBody2 = document.createElement('td')

		tdBody1.innerHTML = `${x}x${i}`
		tdBody2.innerHTML = `${x*i}`

		trBody.appendChild(tdBody1)
		trBody.appendChild(tdBody2)

		tbody.appendChild(trBody)
	}

	table.appendChild(tbody)

	return table
}

function renderTables(qtd){
	for(let i = 1; i <= qtd; i++){
		document.body.appendChild(renderTable(i))
	}
}

renderTables(10)
