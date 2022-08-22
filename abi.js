var ContractAbi  = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_adi_soyadi",
				"type": "string"
			}
		],
		"name": "aday_ekle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "aday_sayisi",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adayisimleri",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adaylar",
		"outputs": [
			{
				"internalType": "string",
				"name": "adi_soyadi",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "oy_sayisi",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kazanan_aday_ismi",
		"outputs": [
			{
				"internalType": "string",
				"name": "aday_ismi",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kazanani_bul",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "kazan_aday_index",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aday_no",
				"type": "uint256"
			}
		],
		"name": "oy_kullan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toplam_oy_sayisi",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];