const re_yyyy = /yyyy/;
const re_MM = /MM/;
const re_dd = /dd/;
const re_hh = /hh/;
const re_mm = /mm/;
const re_ss = /ss/;
export class TimeUtil {
	static unixTimeToDateFormat(unixtime, format = 'yyyy-MM-dd hh:mm:ss') {
		const d = new Date(unixtime);
		const year = d.getFullYear();
		const month = ('0' + (d.getMonth() * 1 + 1)).slice(-2);
		const day = ('0' + d.getDate()).slice(-2);
		const hour = ('0' + d.getHours()).slice(-2);
		const min = ('0' + d.getMinutes()).slice(-2);
		const sec = ('0' + d.getSeconds()).slice(-2);
		return format
			.replace(re_yyyy, year)
			.replace(re_MM, month)
			.replace(re_dd, day)
			.replace(re_hh, hour)
			.replace(re_mm, min)
			.replace(re_ss, sec);
	}
	static getNowUnixtime() {
		return new Date().getTime();
	}
	static getNowUnixTimeAtUTC() {
		return new Date().getTime();
	}
	static random() {
		const base = Math.random() * (Date.now() + '').substring(9) * 1;
		return Math.ceil(base);
	}
	static toDate(unixtime) {
		return new Date(unixtime);
	}
}
