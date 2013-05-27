// 1- DATA
		// Node[id] = , posx, posy, fill],
		var node =
			[[545,291,"#33cc00","Annareb10"],
			[789,248,"#33cc00","Att1"],
			[300,713,"#cc3300","Bernies12"],
			[274,817,"#9900cc","Billsal1"],
			[172,547,"#cc3300","Boxyard1"],
			[275,678,"#33cc00","Bringagee1"],
			[217,808,"#cc3300","Conargo1"],
			[415,537,"#0099cc","Consal1"],
			[309,722,"#0099cc","CubaSF10"],
			[381,738,"#0099cc","GGron#cc3300"],
			[772,437,"#33cc00","Golden1"],
			[33,766,"#9900cc","Goodsal1"],
			[238,648,"#9900cc","Gunbar1"],
			[432,541,"#cc3300","Lila1"],
			[320,805,"#cc3300","LkUrana1"],
			[128,849,"#33cc00","Lowsal1"],
			[280,717,"#0099cc","OppYF1"],
			[523,532,"#0099cc","Parks1"],
			[661,72,"#33cc00","Poison1"],
			[184,823,"#0099cc","Pretty10"],
			[98,832,"#9900cc","Sheep10"],
			[522,459,"#33cc00","Tomin#cc33001"],
			[586,307,"#33cc00","Toor1"],
			[803,460,"#9900cc","Wallaby1"],
			[754,94,"#33cc00","Walliand1"],
			[182,800,"#9900cc","Wansal1"],
			[483,345,"#9900cc","Warren10"],
			[130,703,"#0099cc","YYan#cc3300"]];
		 
		// Similarities: nxn (5x5 = 25)
		var s = [[1,10.87,0.0,40.36,0.0,0.0,0.0,20.27,0.0,0.0,20.02,0.0,30.08,20.52,0.0,20.91,20.38,20.91,20.49,0.0,40.21,0.0,10.91,0.0,10.96,0.0,0.0,0.0],
[10.87,1,0.0,0.0,0.0,20.7,20.73,0.0,20.92,0.0,0.0,0.0,0.0,20.68,0.0,20.86,0.0,0.0,0.0,0.0,0.0,30.65,10.89,0.0,10.95,0.0,0.0,0.0],
[0.0,0.0,1,0.0,20.87,20.94,0.0,20.69,20.66,0.0,0.0,0.0,0.0,20.9,20.95,0.0,0.0,0.0,0.0,20.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[40.36,0.0,0.0,1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.43,40.22,30.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,40.56,40.15,0.0,20.58,30.97,0.0],
[0.0,0.0,20.87,0.0,1,0.0,10.66,0.0,20.73,0.0,0.0,0.0,10.96,10.81,20.93,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[0.0,20.7,20.94,0.0,0.0,1,0.0,20.56,20.64,0.0,0.0,0.0,0.0,0.0,0.0,20.46,0.0,0.0,20.51,0.0,0.0,30.54,20.86,0.0,0.0,0.0,0.0,0.0],
[0.0,20.73,0.0,0.0,10.66,0.0,1,0.0,0.0,20.92,0.0,0.0,10.75,10.76,30.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[20.27,0.0,20.69,0.0,0.0,20.56,0.0,1,20.23,20.2,0.0,0.0,30.12,0.0,20.26,0.0,0.0,20.89,0.0,20.76,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[0.0,20.92,20.66,0.0,20.73,20.64,0.0,20.23,1,20.32,0.0,0.0,0.0,0.0,20.18,20.74,20.58,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.3],
[0.0,0.0,0.0,0.0,0.0,0.0,20.92,20.2,20.32,1,20.86,40.7,0.0,0.0,0.0,0.0,0.0,20.5,0.0,0.0,0.0,0.0,30.02,0.0,0.0,0.0,0.0,10.83],
[20.02,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.86,1,0.0,30.16,20.69,20.58,30.09,0.0,20.98,20.85,0.0,0.0,0.0,20.26,0.0,20.24,0.0,0.0,20.84],
[0.0,0.0,0.0,20.43,0.0,0.0,0.0,0.0,0.0,40.7,0.0,1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.9,50.14,0.0,40.07,0.0,20.12,0.0,0.0],
[30.08,0.0,0.0,40.22,10.96,0.0,10.75,30.12,0.0,0.0,30.16,0.0,1,10.67,20.98,0.0,0.0,30.54,0.0,0.0,40.29,40.08,30.08,0.0,0.0,40.12,20.4,0.0],
[20.52,20.68,20.9,30.99,10.81,0.0,10.76,0.0,0.0,0.0,20.69,0.0,10.67,1,20.41,0.0,0.0,30.13,20.22,0.0,40.02,30.69,0.0,0.0,0.0,40.02,0.0,0.0],
[0.0,0.0,20.95,0.0,20.93,0.0,30.0,20.26,20.18,0.0,20.58,0.0,20.98,20.41,1,30.11,0.0,20.69,0.0,20.49,0.0,30.76,0.0,0.0,20.4,0.0,20.38,0.0],
[20.91,20.86,0.0,0.0,0.0,20.46,0.0,0.0,20.74,0.0,30.09,0.0,0.0,0.0,30.11,1,0.0,0.0,20.7,30.11,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[20.38,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.58,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1,20.22,0.0,20.26,0.0,0.0,0.0,20.32,0.0,0.0,0.0,10.55],
[20.91,0.0,0.0,0.0,0.0,0.0,0.0,20.89,0.0,20.5,20.98,0.0,30.54,30.13,20.69,0.0,20.22,1,0.0,20.72,0.0,40.09,30.01,20.96,20.72,0.0,0.0,20.15],
[20.49,0.0,0.0,0.0,0.0,20.51,0.0,0.0,0.0,0.0,20.85,0.0,0.0,20.22,0.0,20.7,0.0,0.0,1,20.5,0.0,0.0,20.8,10.88,0.0,0.0,10.88,0.0],
[0.0,0.0,20.2,0.0,0.0,0.0,0.0,20.76,0.0,0.0,0.0,0.0,0.0,0.0,20.49,30.11,20.26,20.72,20.5,1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
[40.21,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.9,40.29,40.02,0.0,0.0,0.0,0.0,0.0,0.0,1,0.0,0.0,0.0,40.58,0.0,0.0,0.0],
[0.0,30.65,0.0,0.0,0.0,30.54,0.0,0.0,0.0,0.0,0.0,50.14,40.08,30.69,30.76,0.0,0.0,40.09,0.0,0.0,0.0,1,30.69,0.0,30.68,0.0,0.0,40.0],
[10.91,10.89,0.0,40.56,0.0,20.86,0.0,0.0,0.0,30.02,20.26,0.0,30.08,0.0,0.0,0.0,0.0,30.01,20.8,0.0,0.0,30.69,1,0.0,10.59,0.0,20.45,0.0],
[0.0,0.0,0.0,40.15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,40.07,0.0,0.0,0.0,0.0,20.32,20.96,10.88,0.0,0.0,0.0,0.0,1,20.24,0.0,10.71,0.0],
[10.96,10.95,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.24,0.0,0.0,0.0,20.4,0.0,0.0,20.72,0.0,0.0,40.58,30.68,10.59,20.24,1,0.0,0.0,0.0],
[0.0,0.0,0.0,20.58,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.12,40.12,40.02,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1,0.0,40.37],
[0.0,0.0,0.0,30.97,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.4,0.0,20.38,0.0,0.0,0.0,10.88,0.0,0.0,0.0,20.45,10.71,0.0,0.0,1,0.0],
[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,20.3,10.83,20.84,0.0,0.0,0.0,0.0,0.0,10.55,20.15,0.0,0.0,0.0,40.0,0.0,0.0,0.0,40.37,0.0,1]];

