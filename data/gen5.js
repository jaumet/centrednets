// 1- DATA
		// Node[id] = , posx, posy, fill],
		var node =
			[[31,766,"#cc0066","Bangate"],
			[734,291,"#0066cc","Balranald"],
			[72,792,"#cc0066","BigWarr"],
			[812,482,"#66cc00","Billyanco"],
			[135,555,"#0066cc","Bourke"],
			[565,560,"#cc0066","Brewster"],
			[540,613,"#cc0066","Cargellico"],
			[70,852,"#cc0066","Collar"],
			[220,819,"#cc0066","Come"],
			[537,692,"#cc0066","Wallamundry"],
			[714,564,"#cc0066","cuba"],
			[709,417,"#0066cc","Hay"],
			[225,422,"#0066cc","Idelia"],
			[453,137,"#66cc00","LkCawndilla"],
			[559,512,"#0066cc","Merrowie"],
			[665,132,"#0066cc","Mildura"],
			[783,340,"#66cc00","Moulamein"],
			[613,441,"#cc0066","Mugga"],
			[278,689,"#66cc00","Murrawombie"],
			[540,602,"#cc0066","MurrinBdg"],
			[703,370,"#cc0066","Nap"],
			[649,32,"#66cc00","LkVictoria"],
			[328,695,"#0066cc","Nyngan"],
			[424,168,"#0066cc","Pamamaroo"],
			[633,83,"#0066cc","Tara"],
			[236,392,"#0066cc","Tilpa"],
			[789,301,"#66cc00","Wakool"],
			[803,437,"#66cc00","Wanganella"],
			[352,763,"#cc0066","WarrenSth"],
			[538,463,"#0066cc","Willandra"]];
		 
		var s = [[1,0.0,2.0,0.0,0.0,0.0,0.0,1.31,1.55,2.61,0.0,0.0,0.0,0.0,0.0,4.79,0.0,1.89,2.94,2.27,2.34,0.0,0.0,0.0,0.0,1.75,0.0,3.42],
[0.0,1,0.0,2.39,0.0,0.0,2.4,0.0,0.0,2.82,0.0,1.37,2.88,0.0,2.45,4.78,3.13,2.3,0.0,0.0,0.0,0.0,0.0,2.56,0.0,0.0,2.17,0.0],
[2.0,0.0,1,2.26,0.0,2.06,0.0,0.0,2.32,2.44,2.94,2.03,2.37,0.0,2.03,0.0,0.0,0.0,0.0,2.24,0.0,0.0,0.0,0.0,0.0,0.0,2.08,0.0],
[0.0,2.39,2.26,1,0.0,2.17,2.72,0.0,0.0,0.0,0.0,2.44,2.75,3.39,0.0,0.0,2.66,0.0,2.78,0.0,0.0,2.2,0.0,0.0,2.28,0.0,2.19,0.0],
[0.0,0.0,0.0,0.0,1,0.0,0.0,0.0,2.02,0.0,0.0,2.57,2.47,0.0,0.0,4.48,0.0,2.74,3.02,0.0,2.41,0.0,1.68,2.1,0.0,1.81,0.0,0.0],
[0.0,0.0,2.06,2.17,0.0,1,2.17,0.0,0.0,2.4,0.0,2.41,0.0,0.0,2.03,4.77,0.0,0.0,2.86,2.03,2.8,0.0,0.0,0.0,0.0,0.0,1.99,0.0],
[0.0,2.4,0.0,2.72,0.0,2.17,1,2.09,2.17,2.38,3.05,0.0,0.0,0.0,0.0,0.0,0.0,1.72,0.0,1.62,0.0,2.29,0.0,1.98,0.0,0.0,0.0,3.45],
[1.31,0.0,0.0,0.0,0.0,0.0,2.09,1,1.53,0.0,0.0,0.0,2.65,3.48,0.0,0.0,3.08,2.29,0.0,2.21,2.41,0.0,0.0,2.39,0.0,0.0,0.0,0.0],
[1.55,0.0,2.32,0.0,2.02,0.0,2.17,1.53,1,2.52,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.89,0.0,0.0,0.0,1.86,0.0,0.0,0.0,0.0,0.0],
[2.61,2.82,2.44,0.0,0.0,2.4,2.38,0.0,2.52,1,2.44,0.0,0.0,0.0,0.0,4.5,0.0,0.0,0.0,2.21,0.0,0.0,0.0,0.0,0.0,0.0,2.2,0.0],
[0.0,0.0,2.94,0.0,0.0,0.0,3.05,0.0,0.0,2.44,1,0.0,0.0,3.24,0.0,0.0,0.0,0.0,2.9,2.83,2.63,0.0,2.23,0.0,0.0,0.0,0.0,0.0],
[0.0,1.37,2.03,2.44,2.57,2.41,0.0,0.0,0.0,0.0,0.0,1,0.0,0.0,0.0,4.86,0.0,0.0,0.0,0.0,2.32,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[0.0,2.88,2.37,2.75,2.47,0.0,0.0,2.65,0.0,0.0,0.0,0.0,1,3.61,2.67,4.8,3.0,0.0,3.33,0.0,0.0,2.0,2.5,2.24,2.05,0.0,2.91,0.0],
[0.0,0.0,0.0,3.39,0.0,0.0,0.0,3.48,0.0,0.0,3.24,0.0,3.61,1,0.0,0.0,2.27,0.0,3.2,3.62,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.4],
[0.0,2.45,2.03,0.0,0.0,2.03,0.0,0.0,0.0,0.0,0.0,0.0,2.67,0.0,1,4.71,2.98,0.0,2.79,1.81,0.0,0.0,0.0,2.02,0.0,2.21,1.63,0.0],
[4.79,4.78,0.0,0.0,4.48,4.77,0.0,0.0,0.0,4.5,0.0,4.86,4.8,0.0,4.71,1,3.92,4.78,0.0,4.57,0.0,4.38,4.52,0.0,4.45,4.61,4.51,0.0],
[0.0,3.13,0.0,2.66,0.0,0.0,0.0,3.08,0.0,0.0,0.0,0.0,3.0,2.27,2.98,3.92,1,3.15,0.0,0.0,3.1,2.74,0.0,0.0,0.0,0.0,0.0,2.09],
[1.89,2.3,0.0,0.0,2.74,0.0,1.72,2.29,0.0,0.0,0.0,0.0,0.0,0.0,0.0,4.78,3.15,1,0.0,2.11,2.57,0.0,0.0,1.93,0.0,0.0,0.0,0.0],
[2.94,0.0,0.0,2.78,3.02,2.86,0.0,0.0,2.89,0.0,2.9,0.0,3.33,3.2,2.79,0.0,0.0,0.0,1,0.0,0.0,3.14,0.0,0.0,0.0,0.0,0.0,0.0],
[2.27,0.0,2.24,0.0,0.0,2.03,1.62,2.21,0.0,2.21,2.83,0.0,0.0,3.62,1.81,4.57,0.0,2.11,0.0,1,2.71,1.93,0.0,1.89,0.0,0.0,1.96,0.0],
[2.34,0.0,0.0,0.0,2.41,2.8,0.0,2.41,0.0,0.0,2.63,2.32,0.0,0.0,0.0,0.0,3.1,2.57,0.0,2.71,1,0.0,2.15,2.78,0.0,0.0,0.0,0.0],
[0.0,0.0,0.0,2.2,0.0,0.0,2.29,0.0,0.0,0.0,0.0,0.0,2.0,0.0,0.0,4.38,2.74,0.0,3.14,1.93,0.0,1,0.0,0.0,1.52,1.88,0.0,3.44],
[0.0,0.0,0.0,0.0,1.68,0.0,0.0,0.0,1.86,0.0,2.23,0.0,2.5,0.0,0.0,4.52,0.0,0.0,0.0,0.0,2.15,0.0,1,2.0,0.0,1.7,0.0,0.0],
[0.0,2.56,0.0,0.0,2.1,0.0,1.98,2.39,0.0,0.0,0.0,0.0,2.24,0.0,2.02,0.0,0.0,1.93,0.0,1.89,2.78,0.0,2.0,1,1.87,1.88,2.31,0.0],
[0.0,0.0,0.0,2.28,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.05,0.0,0.0,4.45,0.0,0.0,0.0,0.0,0.0,1.52,0.0,1.87,1,1.98,0.0,0.0],
[1.75,0.0,0.0,0.0,1.81,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.21,4.61,0.0,0.0,0.0,0.0,0.0,1.88,1.7,1.88,1.98,1,2.16,0.0],
[0.0,2.17,2.08,2.19,0.0,1.99,0.0,0.0,0.0,2.2,0.0,0.0,2.91,0.0,1.63,4.51,0.0,0.0,0.0,1.96,0.0,0.0,0.0,2.31,0.0,2.16,1,3.34],
[3.42,0.0,0.0,0.0,0.0,0.0,3.45,0.0,0.0,0.0,0.0,0.0,0.0,2.4,0.0,0.0,2.09,0.0,0.0,0.0,0.0,3.44,0.0,0.0,0.0,0.0,3.34,1]];
