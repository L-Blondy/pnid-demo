import srcPage2 from 'src/assets/page2.jpg'

const fileName2 = srcPage2.split('/').pop() as string

const data = [
	//PNID START
	{
		minX: 0.02297461,
		minY: 0.62676357,
		maxX: 0.09461911,
		maxY: 0.64343737,
		type: 'pnid',
		content: '',
		description: '',
		to: fileName2
	},
	//PNID END
	{
		"minX": 0.40477629987908104,
		"minY": 0.390765284309534,
		"maxX": 0.4588875453446191,
		"maxY": 0.4027362120564344,
		"content": "30-HP-1301A",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.6844014510278114,
		"minY": 0.32364258230012827,
		"maxX": 0.7070737605804112,
		"maxY": 0.3539974348011971,
		"content": "FI 1302",
		"description": "FLOW INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.6883313180169287,
		"minY": 0.36340316374519027,
		"maxX": 0.7064691656590084,
		"maxY": 0.390765284309534,
		"content": "FT 1302",
		"description": "FLOW TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.1946795646916566,
		"minY": 0.314664386489953,
		"maxX": 0.21160822249093109,
		"maxY": 0.3394613082513895,
		"content": "HS 1303",
		"description": "HAND SWITCH",
		"type": "instrument"
	},
	{
		"minX": 0.524788391777509,
		"minY": 0.18127404873877725,
		"maxX": 0.5417170495767836,
		"maxY": 0.2069260367678495,
		"content": "PSV 1301A",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.5036275695284159,
		"minY": 0.4450619923044036,
		"maxX": 0.5208585247883918,
		"maxY": 0.4711415134672937,
		"content": "PSV 1301B",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.34552599758162034,
		"minY": 0.18127404873877725,
		"maxX": 0.36275695284159615,
		"maxY": 0.2069260367678495,
		"content": "PSV 1302A",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.34522370012091896,
		"minY": 0.4591705857203933,
		"maxX": 0.3624546553808948,
		"maxY": 0.4861051731509192,
		"content": "PSV 1302B",
		"description": "PRESSURE SAFETY VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.4077992744860943,
		"minY": 0.2543822146216332,
		"maxX": 0.42593712212817414,
		"maxY": 0.2825994014536127,
		"content": "PDI 1310",
		"description": "PRESSURE DIFFERENTIAL INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.40719467956469163,
		"minY": 0.2949978623343309,
		"maxX": 0.42533252720677145,
		"maxY": 0.3219324497648568,
		"content": "PDT 1310",
		"description": "PRESSURE DIFFERENTIAL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.7487908101571947,
		"minY": 0.36639589568191533,
		"maxX": 0.7657194679564692,
		"maxY": 0.39247541684480547,
		"content": "SDV 1301",
		"description": "SHUT DOWN VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.714328899637243,
		"minY": 0.2830269345874305,
		"maxX": 0.7315598548972189,
		"maxY": 0.3108165882855921,
		"content": "SDV 1302",
		"description": "SHUT DOWN VALVE",
		"type": "instrument"
	},
	{
		"minX": 0.6330108827085853,
		"minY": 0.42197520307823855,
		"maxX": 0.651148730350665,
		"maxY": 0.4467721248396751,
		"content": "TG 1301",
		"description": "TEMPERATURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.659310761789601,
		"minY": 0.32535271483539974,
		"maxX": 0.6807738814993954,
		"maxY": 0.354424967935015,
		"content": "TZI 1301",
		"description": "TEMPERATURE SHUTDOWN INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.6605199516324063,
		"minY": 0.36340316374519027,
		"maxX": 0.6804715840386941,
		"maxY": 0.390765284309534,
		"content": "TZT 1301",
		"description": "TEMPERATURE SHUTDOWN TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.6369407496977025,
		"minY": 0.3266353142368534,
		"maxX": 0.6559854897218863,
		"maxY": 0.3522873022659256,
		"content": "TC 1303",
		"description": "TEMPERATURE CONTROLLER",
		"type": "instrument"
	},
	{
		"minX": 0.2067714631197098,
		"minY": 0.35185976913210776,
		"maxX": 0.22430471584038694,
		"maxY": 0.37708422402736214,
		"content": "TCV 1303A",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.20646916565900847,
		"minY": 0.4031637451902522,
		"maxX": 0.22460701330108826,
		"maxY": 0.4288157332193245,
		"content": "TCV 1303B",
		"description": "UNKNOWN",
		"type": "instrument"
	},
	{
		"minX": 0.11668681983071343,
		"minY": 0.3360410431808465,
		"maxX": 0.13482466747279323,
		"maxY": 0.3625480974775545,
		"content": "TG 1303",
		"description": "TEMPERATURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.6375453446191052,
		"minY": 0.36810602821718685,
		"maxX": 0.6568923821039904,
		"maxY": 0.39333048311244123,
		"content": "TT 1303",
		"description": "TEMPERATURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.1333131801692866,
		"minY": 0.2975630611372381,
		"maxX": 0.15145102781136638,
		"maxY": 0.32407011543394615,
		"content": "TI 1305",
		"description": "TEMPERATURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.13452237001209189,
		"minY": 0.33732364258230013,
		"maxX": 0.15175332527206772,
		"maxY": 0.36340316374519027,
		"content": "TT 1305",
		"description": "TEMPERATURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.40507859733978235,
		"minY": 0.669089354424968,
		"maxX": 0.45949214026602175,
		"maxY": 0.6810602821718683,
		"content": "30-HP-1301B",
		"description": "unknown",
		"type": "equipment"
	},
	{
		"minX": 0.6399637243047158,
		"minY": 0.5741769987174006,
		"maxX": 0.6571946795646917,
		"maxY": 0.6002565198802907,
		"content": "PG 1301",
		"description": "PRESSURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.407496977025393,
		"minY": 0.5335613510047028,
		"maxX": 0.42533252720677145,
		"maxY": 0.559640872167593,
		"content": "PDI 1311",
		"description": "PRESSURE DIFFERENTIAL INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.40810157194679564,
		"minY": 0.5711842667806755,
		"maxX": 0.42533252720677145,
		"maxY": 0.599401453612655,
		"content": "PDT 1311",
		"description": "PRESSURE DIFFERENTIAL TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.6732164449818622,
		"minY": 0.5733219324497648,
		"maxX": 0.6907496977025392,
		"maxY": 0.6006840530141085,
		"content": "TG 1302",
		"description": "TEMPERATURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.10247883917775091,
		"minY": 0.5857203933304831,
		"maxX": 0.1215235792019347,
		"maxY": 0.6130825138948268,
		"content": "TG 1303",
		"description": "TEMPERATURE GAUGE",
		"type": "instrument"
	},
	{
		"minX": 0.656590084643289,
		"minY": 0.5348439504061565,
		"maxX": 0.6741233373639661,
		"maxY": 0.5609234715690466,
		"content": "TI 1304",
		"description": "TEMPERATURE INDICATOR",
		"type": "instrument"
	},
	{
		"minX": 0.657496977025393,
		"minY": 0.5754595981188542,
		"maxX": 0.6750302297460702,
		"maxY": 0.6011115861479265,
		"content": "TT 1304",
		"description": "TEMPERATURE TRANSMITTER",
		"type": "instrument"
	},
	{
		"minX": 0.10580411124546554,
		"minY": 0.1996579734929457,
		"maxX": 0.16535671100362756,
		"maxY": 0.20778110303548525,
		"content": "2\"-AC205-18-RF-4203-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.05501813784764208,
		"minY": 0.3492945703292005,
		"maxX": 0.11608222490931076,
		"maxY": 0.3582727661393758,
		"content": "8\"-AC205-13-CW-4041-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.08857315598548972,
		"minY": 0.39418554938007694,
		"maxX": 0.1505441354292624,
		"maxY": 0.4023086789226165,
		"content": "8\"-AC205-13-CW-1002-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.16414752116082226,
		"minY": 0.4771269773407439,
		"maxX": 0.2249093107617896,
		"maxY": 0.48653270628473705,
		"content": "2\"-AC205-18-RF-4202-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.2560459492140266,
		"minY": 0.5250106883283454,
		"maxX": 0.2626964933494559,
		"maxY": 0.6143651132962804,
		"content": "10\"-AC205-13-CO-1010-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.31983071342200725,
		"minY": 0.5280034202650705,
		"maxX": 0.3258766626360339,
		"maxY": 0.6156477126977341,
		"content": "2\"-AC205-13-CO-1030-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3261789600967352,
		"minY": 0.6301838392475417,
		"maxX": 0.3887545344619105,
		"maxY": 0.6408721675929885,
		"content": "10\"-AC205-13-CO-1022-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.27781136638452236,
		"minY": 0.6498503634031637,
		"maxX": 0.3391777509068924,
		"maxY": 0.6584010260795211,
		"content": "8\"-AC205-13-CW-1005-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.2874848851269649,
		"minY": 0.7379221889696451,
		"maxX": 0.3503627569528416,
		"maxY": 0.7477554510474562,
		"content": "10\"-AC205-13-CO-1026-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.37031438935912936,
		"minY": 0.7601539119281744,
		"maxX": 0.3766626360338573,
		"maxY": 0.8469431380932022,
		"content": "2\"-AC205-13-CW-1006-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.3854292623941959,
		"minY": 0.7605814450619923,
		"maxX": 0.39207980652962515,
		"maxY": 0.8473706712270201,
		"content": "2\"-AC205-13-CW-1003-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4274486094316808,
		"minY": 0.7605814450619923,
		"maxX": 0.43319226118500603,
		"maxY": 0.8465156049593844,
		"content": "2\"-AC205-13-DH-1006-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4416565900846433,
		"minY": 0.7605814450619923,
		"maxX": 0.4480048367593712,
		"maxY": 0.8460880718255664,
		"content": "2\"-AC205-13-DH-1004-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.23548972188633616,
		"minY": 0.9183411714407866,
		"maxX": 0.2974607013301088,
		"maxY": 0.9277469003847798,
		"content": "2\"-AC205-65-DH-1008-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.6405683192261185,
		"minY": 0.8272766139375801,
		"maxX": 0.7046553808948005,
		"maxY": 0.8366823428815733,
		"content": "2\"-AC260N-64-DC-4034-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5459492140266021,
		"minY": 0.6105173150919196,
		"maxX": 0.6073155985489722,
		"maxY": 0.6186404446344592,
		"content": "8\"-AC205-13-CW-1004-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5142079806529625,
		"minY": 0.6498503634031637,
		"maxX": 0.5773881499395405,
		"maxY": 0.658828559213339,
		"content": "10\"-AC205-13-CO-1023-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5362756952841596,
		"minY": 0.6605386917486105,
		"maxX": 0.5426239419588875,
		"maxY": 0.7460453185121847,
		"content": "2\"-AC205-13-CO-1025-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5015114873035067,
		"minY": 0.6605386917486105,
		"maxX": 0.5078597339782346,
		"maxY": 0.7460453185121847,
		"content": "2\"-AC205-13-CO-1026-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4528415961305925,
		"minY": 0.5673364685763147,
		"maxX": 0.5142079806529625,
		"maxY": 0.5763146643864899,
		"content": "2\"-AC205-13-CW-1008-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4498186215235792,
		"minY": 0.5014963659683626,
		"maxX": 0.5069528415961306,
		"maxY": 0.5109020949123557,
		"content": "2\"-AC205-13-DH-1007-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5380894800483675,
		"minY": 0.29628046173578454,
		"maxX": 0.5985489721886336,
		"maxY": 0.30354852501068835,
		"content": "2\"-AC205-13-CW-1007-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.524788391777509,
		"minY": 0.33133817870884996,
		"maxX": 0.5858524788391778,
		"maxY": 0.34031637451902524,
		"content": "8\"-AC205-13-CW-1000-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.5151148730350665,
		"minY": 0.3715262932877298,
		"maxX": 0.5779927448609432,
		"maxY": 0.3805044890979051,
		"content": "10\"-AC205-13-CO-1021-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.7167472793228536,
		"minY": 0.3142368533561351,
		"maxX": 0.7230955259975816,
		"maxY": 0.404018811457888,
		"content": "10\"-AC205-13-CO-1030-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.652962515114873,
		"minY": 0.42112013681060284,
		"maxX": 0.6587061668681983,
		"maxY": 0.5109020949123557,
		"content": "10\"-AC205-13-CO-1024-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.4247279322853688,
		"minY": 0.19452757588713127,
		"maxX": 0.4818621523579202,
		"maxY": 0.2039333048311244,
		"content": "2\"-AC205-13-DH-1008-V",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.2759975816203144,
		"minY": 0.2954253954681488,
		"maxX": 0.33706166868198306,
		"maxY": 0.30483112441214194,
		"content": "2\"-AC205-13-CO-1031-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.33373639661426846,
		"minY": 0.3522873022659256,
		"maxX": 0.39631197097944376,
		"maxY": 0.36041043180846516,
		"content": "10\"-AC205-13-CO-1020-P",
		"description": "unknown",
		"type": "lineid"
	},
	{
		"minX": 0.282950423216445,
		"minY": 0.3710987601539119,
		"maxX": 0.34401451027811364,
		"maxY": 0.3792218896964515,
		"content": "8\"-AC205-13-CW-1001-V",
		"description": "unknown",
		"type": "lineid"
	}
]

export default data