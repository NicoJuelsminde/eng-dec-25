var subtitles = {
	T_21897: {
        lang: "en",
        name: "English",
        tracks: [
        T(TTime("00:00:00.000:00"), TTime("00:00:03.000:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
        T(TTime("00:00:03.000:00"), TTime("00:00:07.440:00"), "Henriette Thim. København. Jeg har altid haft svært ved at høre hjemme på holdsport"),
        T(TTime("00:00:07.880:00"), TTime("00:00:11.320:00"), "og her var sådan en blanding af hård fysisk sport"),
        T(TTime("00:00:11.320:00"), TTime("00:00:13.280:00"), "og der må også gå lidt udklædning i den."),
        T(TTime("00:00:13.280:00"), TTime("00:00:14.960:00"), "Jeg ser jo ikke sådan her ud til hverdag"),
        T(TTime("00:00:14.960:00"), TTime("00:00:18.600:00"), "men jeg kan godt lide at klæde mig ud og det var helt igennem en fantastisk sport."),
        T(TTime("00:01:03.920:00"), TTime("00:01:04.840:00"), "OFFICIAL"),
        T(TTime("00:01:04.840:00"), TTime("00:01:07.600:00"), "Man ku’ godt tro, det bare var piger, der kører rundt og skøjter for sjovt."),
        T(TTime("00:01:07.600:00"), TTime("00:01:10.080:00"), "Men, øh hvad hedder det, der ligger faktisk utroligt meget træning bag."),
        T(TTime("00:01:10.080:00"), TTime("00:01:11.320:00"), "Anders Hinding - Arrangør, DM i Roller Derby. Øh, hvad hedder det."),
        T(TTime("00:01:11.320:00"), TTime("00:01:13.680:00"), "Her i København, der træner vi typisk tre gange om ugen."),
        T(TTime("00:01:13.680:00"), TTime("00:01:17.000:00"), "Øh, hvad hedder det, det kræver utrolig stærk fysik.")
        ]
    },
	T_21869: {
        lang: "en",
        name: "English",
        tracks: [
        T(TTime("00:00:00.000:00"), TTime("00:00:02.960:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
        T(TTime("00:00:03.360:00"), TTime("00:00:08.600:00"), "Noget af det, der forener os som art, det er vores frygt. Mathias Clasen. Leder, Recreational Fear Lab"),
        T(TTime("00:00:09.200:00"), TTime("00:00:12.320:00"), "Og de ting vi er bange for, det er det samme, uanset hvor i verden man kigger."),
        T(TTime("00:00:17.800:00"), TTime("00:00:21.320:00"), "Vores hjerne leder hele tiden efter, om der er fare på færde."),
        T(TTime("00:00:21.760:00"), TTime("00:00:25.440:00"), "Og det er faktisk også en af dens vigtigste opgaver for at sikre vores overlevelse,"),
        T(TTime("00:00:25.440:00"), TTime("00:00:29.120:00"), "men det er ikke altid at vores hjerne er helt rationel, når det kommer til frygt."),
        T(TTime("00:00:31.080:00"), TTime("00:00:36.880:00"), "De fleste af os er ikke ligefrem glade for små rum, højder, edderkopper, slanger eller mørke."),
        T(TTime("00:00:37.320:00"), TTime("00:00:41.600:00"), "Men for nogen er angsten så voldsom, at det kategoriseres som en angstlidelse."),
        T(TTime("00:00:41.600:00"), TTime("00:00:45.720:00"), "Du kan ikke. Nogen er bange for at kærtegne en cognacfarvet puddelhund, for eksempel."),
        T(TTime("00:00:46.400:00"), TTime("00:00:50.960:00"), "En fobi. Så spørgsmålet i dag er: hvorfor har vi fobier?")
        ]
    }
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if (arguments.length == 1) {
		frames = (arguments[0] * 1) / 24;
	}
	else if (arguments.length == 2) {
		frames = (arguments[1] * 1) / 24;
		seconds = arguments[0] * 1;
	}
	else if (arguments.length == 3) {
		frames = (arguments[2] * 1) / 24;
		seconds = arguments[1] * 1;
		minutes = (arguments[0] * 1) * 60;
	}
	else if (arguments.length == 4) {
		frames = (arguments[3] * 1) / 24;
		seconds = arguments[2] * 1;
		minutes = (arguments[1] * 1) * 60;
		hours = (arguments[0] * 1) * 3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * *//*@param {*} value *//*
 */
function UndefinedToZero(value) {
	if (typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 //* @param {numeric} frames Not Required
 //* @param {numeric} seconds Not Required
 //* @param {numeric} minutes Not Required
 //* @param {numeric} hours Not Required
 */

function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if (typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3] * 1) / 24;
	var seconds = split[2] * 1;
	var minutes = (split[1] * 1) * 60;
	var hours = (split[0] * 1) * 3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}