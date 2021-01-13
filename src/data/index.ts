/*
Page 1:
0.02327690 0.43052587 0.09461911 0.44634459 (redirects to page 2)
0.74758162 0.66609662 0.81862152 0.68277041 (redirects to page 2)
0.74758162 0.78452330 0.81862152 0.80076956 (redirects to page 2)

Page 2:
0.02448609 0.29115006 0.09613059 0.30696879 (redirects to page 1)
0.74788392 0.09106456 0.81922612 0.10688328 (redirects to page 1)
0.74788392 0.18041898 0.81922612 0.19752031 (redirects to page 1)
0.74788392 0.62676357 0.81922612 0.29157760 (redirects to page 3)
Page 3:
0.02297461 0.62676357 0.09461911 0.64343737 (redirects to page 2)
*/

import srcPage1 from 'src/assets/page1.jpg'
import srcPage2 from 'src/assets/page2.jpg'
import srcPage3 from 'src/assets/page3.jpg'

const fileName1 = srcPage1.split('/').pop() as string
const fileName2 = srcPage2.split('/').pop() as string
const fileName3 = srcPage3.split('/').pop() as string

const data = {
	page1: [
		{
			minX: 0.02327690,
			minY: 0.42052587,
			maxX: 0.09461911,
			maxY: 0.44634459,
			to: fileName2
		},
		{
			minX: 0.74758162,
			minY: 0.65109662,
			maxX: 0.81862152,
			maxY: 0.68277041,
			to: fileName2
		},
		{
			minX: 0.74758162,
			minY: 0.77452330,
			maxX: 0.81862152,
			maxY: 0.80076956,
			to: fileName2
		},
	],
	page2: [
		{
			minX: 0.02448609,
			minY: 0.28115006,
			maxX: 0.09613059,
			maxY: 0.30696879,
			to: fileName1
		},
		{
			minX: 0.74788392,
			minY: 0.08106456,
			maxX: 0.81922612,
			maxY: 0.10688328,
			to: fileName1
		},
		{
			minX: 0.74788392,
			minY: 0.16401898,
			maxX: 0.81922612,
			maxY: 0.19652031,
			to: fileName1
		},
		{
			minX: 0.74788392,
			minY: 0.26676357,
			maxX: 0.81922612,
			maxY: 0.29157760,
			to: fileName3
		},
	],
	page3: [
		{
			minX: 0.02297461,
			minY: 0.61976357,
			maxX: 0.09461911,
			maxY: 0.64343737,
			to: fileName2
		},
	]
}

export default data
