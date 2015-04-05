/* * * * * * * * * * * * * * * * * * * * * * * * 
 *     Segment--->>>> 0123456789
 *   _      _   _         _    _   _    _   _
 *  | |  |  _|  _|  |_|  |_   |_  | |  |_| |_|
 *  |_|  | |_   _|    |   _|  |_|   |  |_|   |
 * 
 * * * * * * * * * * * * * * * * * * * * * * * */
exports.segment = function(n) {
	var origin_num = {
		0: "1101111", 1: "0001001", 2: "1011110", 3: "1011011", 4: "0111001", 5: "1110011", 6: "1110111", 7: "1101001", 8: "1111111", 9: "1111001"
	}
	// color palet
	var color = {
	      red: "\033[31m",
	      reset: "\033[m"
	};
	// segment_list
	var obj = {
		0: "_", 1: "|", 2: "_", 3: "|", 4: "|", 5: "_", 6: "|" }
	var str = " ";

	// validate
	if(n > 9 || n < 0) {
		console.log("-1 < n < 10 ");
		return 0;
	}
	// flg -> func print_seg
	seg = origin_num[n];

	for( i in seg ){
		if(seg[i] === "1"){
			str += obj[i]
		} else {
			str += " ";
		}
		if((i % 3)== 0){
			str += "\n";
		}
	}
	console.log(color.red + str + color.reset)
}
