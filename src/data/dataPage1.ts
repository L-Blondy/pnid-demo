import srcPage2 from 'src/assets/page2.jpg'

const fileName2 = srcPage2.split('/').pop() as string

const data = [
	//PNID START
	{
		minX: 0.02327690,
		minY: 0.43052587,
		maxX: 0.09461911,
		maxY: 0.44534459,
		type: 'pnid',
		content: '',
		description: '',
		to: fileName2,
	},
	{
		minX: 0.74758162,
		minY: 0.66669662,
		maxX: 0.81862152,
		maxY: 0.68277041,
		type: 'pnid',
		content: '',
		description: '',
		to: fileName2
	},
	{
		minX: 0.74758162,
		minY: 0.78452330,
		maxX: 0.81862152,
		maxY: 0.80076956,
		type: 'pnid',
		content: '',
		description: '',
		to: fileName2
	},
	//PNID END
	{
		"minX": 0.36577992744860943,
		"minY": 0.5327062847370672,
		"maxX": 0.4165659008464329,
		"maxY": 0.549807610089782,
		"content": "30-VS-1202",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.4915356711003628,
		"minY": 0.31209918768704575,
		"maxX": 0.5105804111245466,
		"maxY": 0.33646857631466437,
		"content": "BDV 1205",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.621825876662636,
		"minY": 0.5160324925181702,
		"maxX": 0.6408706166868199,
		"maxY": 0.5425395468148781,
		"content": "FE 1214",
		"description": "FLOW ELEMENT",
		"type": "instrument"
	},
	{
		"minX": 0.6224304715840387,
		"minY": 0.367678495083369,
		"maxX": 0.6405683192261185,
		"maxY": 0.3950406156477127,
		"content": "FI 1214",
		"description": "FLOW INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.6221281741233373,
		"minY": 0.4553227875160325,
		"maxX": 0.6411729141475212,
		"maxY": 0.48097477554510476,
		"content": "FT 1214",
		"description": "FLOW TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.623639661426844,
		"minY": 0.41769987174005985,
		"maxX": 0.6399637243047158,
		"maxY": 0.4433518597691321,
		"content": "FY 1214",
		"description": "POSITIONER (CONTROL VALVE)",
		"type": "instrument"
	},
	{
		"minX": 0.6644498186215235,
		"minY": 0.6613937580162462,
		"maxX": 0.6825876662636033,
		"maxY": 0.685335613510047,
		"content": "LC 1206",
		"description": "LEVEL CONTROLLER",
		"type": "instrument"
	},
	{
		"minX": 0.5223700120918985,
		"minY": 0.6601111586147926,
		"maxX": 0.5414147521160823,
		"maxY": 0.6870457460453185,
		"content": "LT 1206",
		"description": "LEVEL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.4398428053204353,
		"minY": 0.6601111586147926,
		"maxX": 0.4567714631197098,
		"maxY": 0.685763146643865,
		"content": "LZI 1207",
		"description": "LEVEL SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.4026602176541717,
		"minY": 0.6605386917486105,
		"maxX": 0.42019347037484883,
		"maxY": 0.685763146643865,
		"content": "LZT 1207",
		"description": "LEVEL SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.6051995163240629,
		"minY": 0.4557503206498504,
		"maxX": 0.6233373639661427,
		"maxY": 0.48140230867892264,
		"content": "PG 1210",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.5792019347037485,
		"minY": 0.33561351004702866,
		"maxX": 0.5964328899637243,
		"maxY": 0.3612654980761009,
		"content": "PCV 1212",
		"description": "SELF ACTUATED PRESSURE REGULATOR",
		"type": "instrument"
	},
	{
		"minX": 0.5885731559854898,
		"minY": 0.4185549380076956,
		"maxX": 0.6042926239419589,
		"maxY": 0.4433518597691321,
		"content": "PC 1214",
		"description": "PRESSURE CONTROLLER",
		"type": "instrument"
	},
	{
		"minX": 0.5876662636033857,
		"minY": 0.4561778537836682,
		"maxX": 0.6048972188633616,
		"maxY": 0.48140230867892264,
		"content": "PT 1214",
		"description": "PRESSURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.26571946795646917,
		"minY": 0.48696023941855493,
		"maxX": 0.28627569528415964,
		"maxY": 0.516460025651988,
		"content": "PG 1217",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.4546553808948005,
		"minY": 0.4557503206498504,
		"maxX": 0.4782345828295042,
		"maxY": 0.4848225737494656,
		"content": "PZI 1217",
		"description": "PRESSURE SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.4570737605804111,
		"minY": 0.493373236425823,
		"maxX": 0.47551390568319224,
		"maxY": 0.5207353569901667,
		"content": "PZT 1217",
		"description": "PRESSURE SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.2998790810157195,
		"minY": 0.22659256092347158,
		"maxX": 0.3171100362756953,
		"maxY": 0.2526720820863617,
		"content": "PSV 1218A",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.3685006045949214,
		"minY": 0.2274476271911073,
		"maxX": 0.3860338573155985,
		"maxY": 0.2526720820863617,
		"content": "PSV 1218B",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.4866989117291415,
		"minY": 0.2868747327917914,
		"maxX": 0.5048367593712213,
		"maxY": 0.31295425395468146,
		"content": "RO 1205",
		"description": "RESTRICTION ORIFICE",
		"type": "instrument"
	},
	{
		"minX": 0.5021160822249093,
		"minY": 0.7610089781958101,
		"maxX": 0.5205562273276905,
		"maxY": 0.7892261650277896,
		"content": "SDV 1206",
		"description": "SHUT DOWN VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.279322853688029,
		"minY": 0.582727661393758,
		"maxX": 0.3010882708585248,
		"maxY": 0.6088071825566481,
		"content": "TI 1215",
		"description": "TEMPERATURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.2799274486094317,
		"minY": 0.6250534416417273,
		"maxX": 0.2992744860943168,
		"maxY": 0.652415562206071,
		"content": "TT 1215",
		"description": "TEMPERATURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.5686215235792019,
		"minY": 0.1410859341598974,
		"maxX": 0.6348246674727932,
		"maxY": 0.15091919623770841,
		"content": "10\"-AD295N-18-RF-4096-N",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4117291414752116,
		"minY": 0.1573321932449765,
		"maxX": 0.42019347037484883,
		"maxY": 0.24882428388200087,
		"content": "6\"-AD295N-18-RF-4095-N",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.48095525997581623,
		"minY": 0.15604959384352288,
		"maxX": 0.4873035066505441,
		"maxY": 0.24711415134672937,
		"content": "4\"-AD295N-18-RF-4094-N",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5148125755743652,
		"minY": 0.15604959384352288,
		"maxX": 0.5214631197097944,
		"maxY": 0.24711415134672937,
		"content": "6\"-AD295N-18-BD-4097-N",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5668077388149939,
		"minY": 0.1658828559213339,
		"maxX": 0.5743651753325272,
		"maxY": 0.26036767849508335,
		"content": "10\"-AD295N-18-RF-4098-N",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.13059250302297462,
		"minY": 0.42838820008550665,
		"maxX": 0.1937726723095526,
		"maxY": 0.43736639589568194,
		"content": "6\"-AC205N-13-CO-1014-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.13119709794437726,
		"minY": 0.4788371098760154,
		"maxX": 0.19649334945586458,
		"maxY": 0.4873877725523728,
		"content": "14\"-AC205N-12-CO-1003-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4017533252720677,
		"minY": 0.7618640444634459,
		"maxX": 0.407496977025393,
		"maxY": 0.8512184694313809,
		"content": "2\"-AC260N-64-DC-4091-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.6517533252720678,
		"minY": 0.7819581017528858,
		"maxX": 0.7149334945586457,
		"maxY": 0.7922188969645148,
		"content": "12\"-AC205-12-CO-1005-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.6532648125755743,
		"minY": 0.8525010688328345,
		"maxX": 0.7185610640870617,
		"maxY": 0.8627618640444634,
		"content": "2\"-AC260N-64-DC-4092-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.6535671100362757,
		"minY": 0.9324497648567764,
		"maxX": 0.7155380894800484,
		"maxY": 0.9427105600684053,
		"content": "2\"-AC205-65-DH-4194-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.717956469165659,
		"minY": 0.4600256519880291,
		"maxX": 0.7835550181378477,
		"maxY": 0.46943138093202225,
		"content": "10\"-AD295N-30-NG-1011-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.30864570737605806,
		"minY": 0.36041043180846516,
		"maxX": 0.31469165659008463,
		"maxY": 0.45275758871312527,
		"content": "4\"-AD295N-12-NG-1012-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3778718258766626,
		"minY": 0.3612654980761009,
		"maxX": 0.38361547762998793,
		"maxY": 0.45275758871312527,
		"content": "4\"-AD295N-12-NG-1014-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4619105199516324,
		"minY": 0.3142368533561351,
		"maxX": 0.46825876662636035,
		"maxY": 0.4053014108593416,
		"content": "2\"-AD295N-12-NG-1013-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4797460701330109,
		"minY": 0.36169303120991875,
		"maxX": 0.4860943168077388,
		"maxY": 0.45318512184694315,
		"content": "4\"-AD295N-12-NG-1015-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5825272067714631,
		"minY": 0.3817870884993587,
		"maxX": 0.5891777509068924,
		"maxY": 0.4724241128687473,
		"content": "4\"-AD295N-12-NG-1016-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.28627569528415964,
		"minY": 0.19281744335185977,
		"maxX": 0.3503627569528416,
		"maxY": 0.20222317229585293,
		"content": "6\"-AD295N-18-RF-4093-N",
		"description": "unknown",
		"type": "lineid"
	}
]

export default data