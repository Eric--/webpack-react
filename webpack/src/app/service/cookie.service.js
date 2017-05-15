
class CookieService {

	static getCookie(key){

		let arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg))
		    return decodeURIComponent(arr[2]);
		else
		    return '';
	}

}

module.exports = CookieService;