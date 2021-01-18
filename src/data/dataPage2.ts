import srcPage1 from 'src/assets/page1.jpg'
import srcPage3 from 'src/assets/page3.jpg'

const fileName1 = srcPage1.split('/').pop() as string
const fileName3 = srcPage3.split('/').pop() as string

const data = [
	//PNID START
	{
		minX: 0.02448609,
		minY: 0.29015006,
		maxX: 0.09613059,
		maxY: 0.30696879,
		type: 'pnid',
		content: 'BAE-71200-PR-DW-1020',
		description: 'Piping and instrumentation diagram LLP separator',
		to: fileName1
	},
	{
		minX: 0.74788392,
		minY: 0.09006456,
		maxX: 0.81922612,
		maxY: 0.10688328,
		type: 'pnid',
		content: 'BAE-71200-PR-DW-1020',
		description: 'Piping and instrumentation diagram LLP separator',
		to: fileName1
	},
	{
		minX: 0.74788392,
		minY: 0.18001898,
		maxX: 0.81922612,
		maxY: 0.19652031,
		type: 'pnid',
		content: 'BAE-71200-PR-DW-1020',
		description: 'Piping and instrumentation diagram LLP separator',
		to: fileName1
	},
	{
		minX: 0.74788392,
		minY: 0.27476357,
		maxX: 0.81922612,
		maxY: 0.29157760,
		type: 'pnid',
		content: 'BAE-71300-PR-DW-1000',
		description: 'Piping and instrumentation diagram crude oil cooler',
		to: fileName3
	},
	//PNID END
	{
		"minX": 0.2581620314389359,
		"minY": 0.3317657118426678,
		"maxX": 0.31197097944377267,
		"maxY": 0.3437366395895682,
		"content": "30-PC-1301A",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.5084643288996372,
		"minY": 0.34031637451902524,
		"maxX": 0.527509068923821,
		"maxY": 0.36212056434373663,
		"content": "FZI 1301",
		"description": "FLOW SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.5087666263603385,
		"minY": 0.29884566053869177,
		"maxX": 0.5278113663845224,
		"maxY": 0.32364258230012827,
		"content": "FZT 1301",
		"description": "FLOW SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.5084643288996372,
		"minY": 0.15220179563916203,
		"maxX": 0.5272067714631197,
		"maxY": 0.17657118426678067,
		"content": "FC 1304",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.621825876662636,
		"minY": 0.061137238135955535,
		"maxX": 0.6396614268440145,
		"maxY": 0.08721675929884566,
		"content": "FCV 1304",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.5087666263603385,
		"minY": 0.2394185549380077,
		"maxX": 0.5262998790810157,
		"maxY": 0.26507054296707994,
		"content": "FT 1304",
		"description": "FLOW TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.19195888754534463,
		"minY": 0.19581017528858485,
		"maxX": 0.21100362756952842,
		"maxY": 0.22274476271911073,
		"content": "HS 1302",
		"description": "HAND SWITCH",
		"type": "instrument"
	},
	{
		"minX": 0.6571946795646917,
		"minY": 0.24711415134672937,
		"maxX": 0.6753325272067715,
		"maxY": 0.2736212056434374,
		"content": "LCV 1301A",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.6571946795646917,
		"minY": 0.3270628473706712,
		"maxX": 0.6759371221281741,
		"maxY": 0.354424967935015,
		"content": "LCV 1301B",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.18349455864570738,
		"minY": 0.22702009405728943,
		"maxX": 0.20133010882708585,
		"maxY": 0.25309961522017954,
		"content": "PDI 1301",
		"description": "PRESSURE DIFFERENTIAL INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.1837968561064087,
		"minY": 0.2586575459598119,
		"maxX": 0.20133010882708585,
		"maxY": 0.2851646002565199,
		"content": "PDT 1301",
		"description": "PRESSURE DIFFERENTIAL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.3685006045949214,
		"minY": 0.19281744335185977,
		"maxX": 0.3866384522370012,
		"maxY": 0.22060709705002138,
		"content": "PZI 1304",
		"description": "PRESSURE SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.3685006045949214,
		"minY": 0.23728088926891835,
		"maxX": 0.3860338573155985,
		"maxY": 0.26464300983326206,
		"content": "PZT 1304",
		"description": "PRESSURE SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.3932889963724305,
		"minY": 0.19495510902094912,
		"maxX": 0.4126360338573156,
		"maxY": 0.2201795639162035,
		"content": "PI 1307",
		"description": "PRESSURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.3932889963724305,
		"minY": 0.2377084224027362,
		"maxX": 0.41233373639661425,
		"maxY": 0.26464300983326206,
		"content": "PT 1307",
		"description": "PRESSURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.15175332527206772,
		"minY": 0.2441214194100043,
		"maxX": 0.17291414752116083,
		"maxY": 0.27533133817870886,
		"content": "PG 1310",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.2512091898428053,
		"minY": 0.14194100042753313,
		"maxX": 0.2711608222490931,
		"maxY": 0.17015818725951262,
		"content": "XC 1301A-1",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.2747883917775091,
		"minY": 0.14194100042753313,
		"maxX": 0.2950423216444982,
		"maxY": 0.16973065412569474,
		"content": "XC 1301A-2",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.25151148730350664,
		"minY": 0.4228302693458743,
		"maxX": 0.2720677146311971,
		"maxY": 0.44976485677640016,
		"content": "XC 1301B-1",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.2741837968561064,
		"minY": 0.4232578024796922,
		"maxX": 0.2953446191051995,
		"maxY": 0.4506199230440359,
		"content": "XC 1301B-2",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.2998790810157195,
		"minY": 0.14279606669516887,
		"maxX": 0.3210399032648126,
		"maxY": 0.16930312099187686,
		"content": "XI 1301A-1",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.3225513905683192,
		"minY": 0.14151346729371525,
		"maxX": 0.34280532043530837,
		"maxY": 0.16930312099187686,
		"content": "XI 1301A-2",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.3004836759371221,
		"minY": 0.4232578024796922,
		"maxX": 0.32013301088270857,
		"maxY": 0.45019238991021804,
		"content": "XI 1301B-1",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.32376058041112454,
		"minY": 0.42154766994442067,
		"maxX": 0.3431076178960097,
		"maxY": 0.4506199230440359,
		"content": "XI 1301B-2",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.22581620314389358,
		"minY": 0.14194100042753313,
		"maxX": 0.2439540507859734,
		"maxY": 0.168875587858059,
		"content": "XZ 1301A",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.2270253929866989,
		"minY": 0.4236853356135101,
		"maxX": 0.24425634824667472,
		"maxY": 0.4493373236425823,
		"content": "XZ 1301B",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.2578597339782346,
		"minY": 0.6049593843522874,
		"maxX": 0.3128778718258767,
		"maxY": 0.6165027789653699,
		"content": "30-PC-1301B",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.18409915356711004,
		"minY": 0.493373236425823,
		"maxX": 0.20133010882708585,
		"maxY": 0.5194527575887131,
		"content": "PDI 1302",
		"description": "PRESSURE DIFFERENTIAL INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.18409915356711004,
		"minY": 0.5348439504061565,
		"maxX": 0.20193470374848851,
		"maxY": 0.5622060709705002,
		"content": "PDT 1302",
		"description": "PRESSURE DIFFERENTIAL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.376360338573156,
		"minY": 0.4711415134672937,
		"maxX": 0.3935912938331318,
		"maxY": 0.4959384352287302,
		"content": "PZI 1305",
		"description": "PRESSURE SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.376360338573156,
		"minY": 0.5138948268490808,
		"maxX": 0.39510278113663844,
		"maxY": 0.539974348011971,
		"content": "PZT 1305",
		"description": "PRESSURE SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.3987303506650544,
		"minY": 0.4719965797349295,
		"maxX": 0.41807738814993956,
		"maxY": 0.49722103463018386,
		"content": "PI 1308",
		"description": "PRESSURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.3996372430471584,
		"minY": 0.5143223599828987,
		"maxX": 0.41807738814993956,
		"maxY": 0.5404018811457888,
		"content": "PT 1308",
		"description": "PRESSURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.15356711003627568,
		"minY": 0.5190252244548953,
		"maxX": 0.1738210399032648,
		"maxY": 0.5523728088926891,
		"content": "PG 1311",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.2512091898428053,
		"minY": 0.7067122702009405,
		"maxX": 0.27055622732769047,
		"maxY": 0.7332193244976486,
		"content": "XC 1301C-1",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.2741837968561064,
		"minY": 0.7058572039333049,
		"maxX": 0.2959492140266022,
		"maxY": 0.7345019238991022,
		"content": "XC 1301C-2",
		"description": "PCS OUTPUT (CONTROL)",
		"type": "instrument"
	},
	{
		"minX": 0.2998790810157195,
		"minY": 0.7058572039333049,
		"maxX": 0.3210399032648126,
		"maxY": 0.735356990166738,
		"content": "XI 1301C-1",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.32376058041112454,
		"minY": 0.7067122702009405,
		"maxX": 0.3431076178960097,
		"maxY": 0.7332193244976486,
		"content": "XI 1301C-2",
		"description": "PCS INPUT (RUNNING STATUS)",
		"type": "instrument"
	},
	{
		"minX": 0.22642079806529625,
		"minY": 0.7075673364685763,
		"maxX": 0.24516324062877873,
		"maxY": 0.7340743907652844,
		"content": "XZ 1301C",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.2578597339782346,
		"minY": 0.8867037195382642,
		"maxX": 0.3134824667472793,
		"maxY": 0.8995297135528003,
		"content": "30-PC-1301C",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.19226118500604594,
		"minY": 0.7776827704147071,
		"maxX": 0.20918984280532044,
		"maxY": 0.8033347584437794,
		"content": "PDI 1303",
		"description": "PRESSURE DIFFERENTIAL INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.19135429262394196,
		"minY": 0.8200085506626763,
		"maxX": 0.20949214026602175,
		"maxY": 0.8460880718255664,
		"content": "PDT 1303",
		"description": "PRESSURE DIFFERENTIAL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.37394195888754533,
		"minY": 0.7567336468576314,
		"maxX": 0.39510278113663844,
		"maxY": 0.781530568619068,
		"content": "PZI 1306",
		"description": "PRESSURE SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.374546553808948,
		"minY": 0.797776827704147,
		"maxX": 0.39298669891172916,
		"maxY": 0.8238563488670372,
		"content": "PZT 1306",
		"description": "PRESSURE SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.39933494558645705,
		"minY": 0.7571611799914494,
		"maxX": 0.4195888754534462,
		"maxY": 0.7828131680205216,
		"content": "PI 1309",
		"description": "PRESSURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.40054413542926237,
		"minY": 0.7969217614365113,
		"maxX": 0.4189842805320435,
		"maxY": 0.8242838820008551,
		"content": "PT 1309",
		"description": "PRESSURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.16384522370012092,
		"minY": 0.8071825566481402,
		"maxX": 0.18319226118500603,
		"maxY": 0.8345446772124839,
		"content": "PG 1312",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.09250302297460701,
		"minY": 0.2612227447627191,
		"maxX": 0.15114873035066506,
		"maxY": 0.2689183411714408,
		"content": "10\"-AC205-13-CO-1001-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.35761789600967353,
		"minY": 0.2817443351859769,
		"maxX": 0.4156590084643289,
		"maxY": 0.2907225309961522,
		"content": "8\"-AC205-13-CO-1004-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5278113663845224,
		"minY": 0.2830269345874305,
		"maxX": 0.5870616686819831,
		"maxY": 0.29286019666524155,
		"content": "10\"-AC205-13-CO-1008-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.7430471584038694,
		"minY": 0.10731081658828559,
		"maxX": 0.8041112454655381,
		"maxY": 0.11842667806755024,
		"content": "6\"-AC205N-13-CO-1011-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.727932285368803,
		"minY": 0.29884566053869177,
		"maxX": 0.7877871825876662,
		"maxY": 0.30910645575032064,
		"content": "10\"-AC205-13-CO-1010-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.7294437726723095,
		"minY": 0.3390337751175716,
		"maxX": 0.7892986698911729,
		"maxY": 0.34886703719538265,
		"content": "10\"-AC205-13-CO-1009-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.09280532043530834,
		"minY": 0.44121419410004276,
		"maxX": 0.1003627569528416,
		"maxY": 0.5314236853356135,
		"content": "12\"-AC205-13-CO-1000-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3573155985489722,
		"minY": 0.5746045318512185,
		"maxX": 0.36305925030229746,
		"maxY": 0.6618212911500642,
		"content": "8\"-AC205-13-CO-1005-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.49848851269649336,
		"minY": 0.6477126977340744,
		"maxX": 0.5057436517533253,
		"maxY": 0.7387772552372809,
		"content": "10\"-AC205-13-CO-1007-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3651753325272068,
		"minY": 0.7464728516460025,
		"maxX": 0.3721281741233374,
		"maxY": 0.8392475416844806,
		"content": "2\"-ANC205-13-DH-1002-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3313180169286578,
		"minY": 0.857631466438649,
		"maxX": 0.3388754534461911,
		"maxY": 0.9461308251389483,
		"content": "8\"-AC205-13-CO-1006-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.21221281741233375,
		"minY": 0.93373236425823,
		"maxX": 0.27357920193470375,
		"maxY": 0.943993159469859,
		"content": "2\"-AC205-13-DH-1000-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.10278113663845223,
		"minY": 0.8298418127404874,
		"maxX": 0.1626360338573156,
		"maxY": 0.8388200085506626,
		"content": "10\"-AC205-13-CO-1003-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.49939540507859737,
		"minY": 0.9422830269345874,
		"maxX": 0.5616686819830713,
		"maxY": 0.9521162890123984,
		"content": "2\"-AC205-13-DH-1003-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.10247883917775091,
		"minY": 0.5480974775545104,
		"maxX": 0.16203143893591293,
		"maxY": 0.5575032064985036,
		"content": "10\"-AC205-13-CO-1002-P",
		"description": "unknown",
		"type": "lineid"
	}
]

export default data