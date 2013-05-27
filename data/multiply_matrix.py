import numpy as np

b = [[1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0],
[0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1],
[1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0],
[0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0],
[0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0],
[0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0],
[0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0],
[1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0],
[1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
[1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0],
[0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1],
[0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1],
[0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1],
[0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1],
[0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1],
[1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0],
[0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1],
[1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1],
[1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
[1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0],
[1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1],
[0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0],
[0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1],
[0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0],
[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1],
[1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
[0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],
[1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0],
[1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0],
[0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1]];

s = [[0.0,2.21,2.0,2.47,2.08,2.3,2.0,1.31,1.55,2.61,2.53,2.03,2.43,3.45,2.01,4.79,2.92,1.89,2.94,2.27,2.34,2.16,1.88,2.03,2.29,1.75,2.14,3.42,1.79,1.97],
[2.21,0.0,2.31,2.39,2.75,2.57,2.4,2.31,2.26,2.82,2.97,1.37,2.88,3.67,2.45,4.78,3.13,2.3,3.32,2.35,2.63,2.37,2.47,2.56,2.63,2.28,2.17,3.56,1.99,2.4],
[2.0,2.31,0.0,2.26,2.44,2.06,2.26,2.31,2.32,2.44,2.94,2.03,2.37,3.56,2.03,4.76,2.94,2.37,3.01,2.24,2.63,2.17,2.23,2.2,2.27,2.05,2.08,3.44,1.84,2.16],
[2.47,2.39,2.26,0.0,2.58,2.17,2.72,2.6,2.53,2.57,2.66,2.44,2.75,3.39,2.4,4.35,2.66,2.67,2.78,2.34,2.81,2.2,2.54,2.34,2.28,2.33,2.19,3.14,2.29,2.37],
[2.08,2.75,2.44,2.58,0.0,2.75,2.69,2.3,2.02,2.69,2.61,2.57,2.47,3.6,2.62,4.48,2.71,2.74,3.02,2.47,2.41,2.15,1.68,2.1,2.35,1.81,2.66,3.46,2.25,2.38],
[2.3,2.57,2.06,2.17,2.75,0.0,2.17,2.51,2.44,2.4,2.96,2.41,2.92,3.52,2.03,4.77,2.87,2.42,2.86,2.03,2.8,2.35,2.54,2.29,2.57,2.33,1.99,3.34,2.05,2.19],
[2.0,2.4,2.26,2.72,2.69,2.17,0.0,2.09,2.17,2.38,3.05,2.23,2.87,3.8,2.02,4.87,3.16,1.72,3.25,1.62,2.76,2.29,2.43,1.98,2.45,2.24,2.18,3.45,2.22,2.12],
[1.31,2.31,2.31,2.6,2.3,2.51,2.09,0.0,1.53,2.72,2.72,2.14,2.65,3.48,2.16,4.9,3.08,2.29,3.01,2.21,2.41,2.4,2.14,2.39,2.54,2.06,2.25,3.41,2.02,2.16],
[1.55,2.26,2.32,2.53,2.02,2.44,2.17,1.53,0.0,2.52,2.62,2.07,2.69,3.54,2.36,4.88,2.92,2.31,2.89,2.23,2.38,2.34,1.86,2.29,2.57,2.01,2.35,3.42,1.79,2.28],
[2.61,2.82,2.44,2.57,2.69,2.4,2.38,2.72,2.52,0.0,2.44,2.51,3.06,3.63,2.35,4.5,3.03,2.54,3.15,2.21,2.73,2.4,2.37,2.44,2.58,2.31,2.2,3.56,2.58,2.33],
[2.53,2.97,2.94,2.66,2.61,2.96,3.05,2.72,2.62,2.44,0.0,2.76,2.98,3.24,2.75,4.4,2.72,2.75,2.9,2.83,2.63,2.46,2.23,2.57,2.59,2.33,2.7,3.27,2.79,2.44],
[2.03,1.37,2.03,2.44,2.57,2.41,2.23,2.14,2.07,2.51,2.76,0.0,2.68,3.61,2.06,4.86,3.02,2.1,3.04,2.13,2.32,2.24,2.17,2.27,2.48,2.07,2.07,3.44,1.78,2.02],
[2.43,2.88,2.37,2.75,2.47,2.92,2.87,2.65,2.69,3.06,2.98,2.68,0.0,3.61,2.67,4.8,3.0,2.89,3.33,2.51,3.17,2.0,2.5,2.24,2.05,2.25,2.91,3.76,2.39,2.68],
[3.45,3.67,3.56,3.39,3.6,3.52,3.8,3.48,3.54,3.63,3.24,3.61,3.61,0.0,3.56,4.32,2.27,3.73,3.2,3.62,3.81,3.48,3.45,3.53,3.6,3.52,3.44,2.4,3.41,3.5],
[2.01,2.45,2.03,2.4,2.62,2.03,2.02,2.16,2.36,2.35,2.75,2.06,2.67,3.56,0.0,4.71,2.98,1.97,2.79,1.81,2.68,2.12,2.39,2.02,2.29,2.21,1.63,3.34,2.16,1.35],
[4.79,4.78,4.76,4.35,4.48,4.77,4.87,4.9,4.88,4.5,4.4,4.86,4.8,4.32,4.71,0.0,3.92,4.78,4.54,4.57,4.93,4.38,4.52,4.52,4.45,4.61,4.51,4.48,4.69,4.56],
[2.92,3.13,2.94,2.66,2.71,2.87,3.16,3.08,2.92,3.03,2.72,3.02,3.0,2.27,2.98,3.92,0.0,3.15,2.74,2.96,3.1,2.74,2.73,2.78,2.8,2.79,2.92,2.09,2.87,2.75],
[1.89,2.3,2.37,2.67,2.74,2.42,1.72,2.29,2.31,2.54,2.75,2.1,2.89,3.73,1.97,4.78,3.15,0.0,3.27,2.11,2.57,2.18,2.36,1.93,2.34,2.23,2.13,3.54,2.24,1.9],
[2.94,3.32,3.01,2.78,3.02,2.86,3.25,3.01,2.89,3.15,2.9,3.04,3.33,3.2,2.79,4.54,2.74,3.27,0.0,2.93,3.21,3.14,2.95,2.99,3.14,2.89,2.73,3.18,2.95,2.77],
[2.27,2.35,2.24,2.34,2.47,2.03,1.62,2.21,2.23,2.21,2.83,2.13,2.51,3.62,1.81,4.57,2.96,2.11,2.93,0.0,2.71,1.93,2.3,1.89,2.16,2.11,1.96,3.33,2.11,2.03],
[2.34,2.63,2.63,2.81,2.41,2.8,2.76,2.41,2.38,2.73,2.63,2.32,3.17,3.81,2.68,4.93,3.1,2.57,3.21,2.71,0.0,2.6,2.15,2.78,2.85,2.29,2.54,3.65,2.67,2.55],
[2.16,2.37,2.17,2.2,2.15,2.35,2.29,2.4,2.34,2.4,2.46,2.24,2.0,3.48,2.12,4.38,2.74,2.18,3.14,1.93,2.6,0.0,2.17,1.87,1.52,1.88,2.3,3.44,2.13,2.08],
[1.88,2.47,2.23,2.54,1.68,2.54,2.43,2.14,1.86,2.37,2.23,2.17,2.5,3.45,2.39,4.52,2.73,2.36,2.95,2.3,2.15,2.17,0.0,2.0,2.33,1.7,2.46,3.37,1.94,2.14],
[2.03,2.56,2.2,2.34,2.1,2.29,1.98,2.39,2.29,2.44,2.57,2.27,2.24,3.53,2.02,4.52,2.78,1.93,2.99,1.89,2.78,1.87,2.0,0.0,1.87,1.88,2.31,3.35,2.04,2.01],
[2.29,2.63,2.27,2.28,2.35,2.57,2.45,2.54,2.57,2.58,2.59,2.48,2.05,3.6,2.29,4.45,2.8,2.34,3.14,2.16,2.85,1.52,2.33,1.87,0.0,1.98,2.35,3.51,2.37,2.14],
[1.75,2.28,2.05,2.33,1.81,2.33,2.24,2.06,2.01,2.31,2.33,2.07,2.25,3.52,2.21,4.61,2.79,2.23,2.89,2.11,2.29,1.88,1.7,1.88,1.98,0.0,2.16,3.43,1.95,2.0],
[2.14,2.17,2.08,2.19,2.66,1.99,2.18,2.25,2.35,2.2,2.7,2.07,2.91,3.44,1.63,4.51,2.92,2.13,2.73,1.96,2.54,2.3,2.46,2.31,2.35,2.16,0.0,3.34,2.23,1.68],
[3.42,3.56,3.44,3.14,3.46,3.34,3.45,3.41,3.42,3.56,3.27,3.44,3.76,2.4,3.34,4.48,2.09,3.54,3.18,3.33,3.65,3.44,3.37,3.35,3.51,3.43,3.34,0.0,3.41,3.25]];
		
#print np.dot(sim,simbin)

def elxel():
	print len(s)
	print len(b)
	sol = "["

	for i in range(0,len(s)):
		sol += "["
		for j in range(0,len(s)):
			if (i==j):
				sol += str(1)+","
			else:
				sol += str(s[i][j]*b[i][j])+","
		sol = sol[:-1]+"],"
	return sol[:-1]+"]"
	
print elxel()

