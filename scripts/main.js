document.addEventListener('DOMContentLoaded', () => {
	const generateBtn = document.getElementById('generateBtn')

	generateBtn.addEventListener('click', generateIBANs)
})

const randomNumber = length =>
	Array.from({ length }, () => Math.floor(Math.random() * 10)).join('')

const convertToNumericIBAN = iban =>
	iban.replace(/[A-Z]/g, char => char.charCodeAt(0) - 55).replace(/\D/g, '')

const calculateCheckDigits = bban => {
	let ibanNumeric = convertToNumericIBAN(bban + 'DE00')
	let checkDigits = 98n - (BigInt(ibanNumeric) % 97n)

	return checkDigits.toString().padStart(2, '0')
}

const generateIBAN = () => {
	let bankCode = randomNumber(8)
	let accountNumber = randomNumber(10)
	let bban = bankCode + accountNumber
	let checkDigits = calculateCheckDigits(bban)

	return 'DE' + checkDigits + bban
}

const generateIBANs = () => {
	let count = parseInt(document.getElementById('count').value)
	ibanList.innerHTML = ''

	let ibanTable = document.getElementById('ibanTable')
	ibanTable.style.display = 'table'

	for (let i = 0; i < count; i++) {
		let iban = generateIBAN()
		let ibanRow = document.createElement('tr')

		let ibanText = document.createElement('td')
		ibanText.textContent = iban

		let copyButton = document.createElement('td')
		let copyButtonElem = document.createElement('button')
		copyButtonElem.textContent = 'copy'
		copyButtonElem.classList.add('copy-btn')

		copyButtonElem.onclick = function () {
			copyIBAN(iban, copyButtonElem)
		}

		copyButton.appendChild(copyButtonElem)

		ibanRow.appendChild(ibanText)
		ibanRow.appendChild(copyButton)
		ibanList.appendChild(ibanRow)
	}
}

function copyIBAN(iban, button) {
	navigator.clipboard.writeText(iban).then(() => {
		button.classList.add('copied')
		button.textContent = 'copied'
	})
}
