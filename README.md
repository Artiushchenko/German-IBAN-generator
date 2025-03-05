# German IBAN Generator

A simple JavaScript-based tool for generating random German IBANs. This tool is for educational and testing purposes only and should **not** be used for real banking transactions.

## 📌 Navigation

- [Features](#features)
- [Disclaimer](#disclaimer)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)

## Features

✅ Generates valid German IBANs  
✅ Automatically calculates the check digits  
✅ Allows generating multiple IBANs at once  
✅ Copy IBAN to clipboard with one click  

## Disclaimer

**This IBAN generator is for educational and testing purposes only.**  
It does **not** generate usable IBANs for banking transactions. Do not use it for fraud or illegal purposes.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Artiushchenko/German-IBAN-generator.git
   cd German-IBAN-generator
2. Open index.html in a web browser.

## Usage

1. Enter the number of IBANs to generate.
2. Click the **"Generate"** button.
3. Click **"Copy"** next to an IBAN to copy it to the clipboard.

## Code Overview

| Function | Description |
|----------|------------|
| `randomNumber(length)` | Generates a random number of a given length. |
| `convertToNumericIBAN(iban)` | Converts an IBAN to a numeric format. |
| `calculateCheckDigits(bban)` | Computes the check digits required for a valid IBAN. |
| `generateIBAN()` | Generates a single German IBAN. |
| `generateIBANs()` | Generates and displays multiple IBANs. |
| `copyIBAN(iban, button)` | Copies an IBAN to the clipboard. |
