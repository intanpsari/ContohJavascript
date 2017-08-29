
function swapAngka(a,b,c){
	
	var angka = [b,c,a]; 
	for(i=0;i<3;i++){
		console.log(angka[i]);
	}
	
}

function kodePos(a){
	var kodepos;
	if(a.toLowerCase() =="padang"){
		kodepos="25000";
	}else if(a.toLowerCase() =="bandung"){
		kodepos="40100";
	}else if(a.toLowerCase() =="solo"){
		kodepos="51000";
	}else if(a.toLowerCase() =="denpasar"){
		kodepos="72000";
	}else if(a.toLowerCase() =="palu"){
		kodepos="923000";
	}else{
		alert("Kota tidak ada");
	}
	alert(kodepos);
}

function selisihHari(hari1,hari2){
	var hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
	console.log(hari1);
	console.log(hari2);

	var posisihari2=0;
	var selisih =0;
	if((hari.indexOf(hari2)) < (hari.indexOf(hari1))){
		posisihari2 = (hari.indexOf(hari2)) + 7;
	  selisih = posisihari2 - (hari.indexOf(hari1)) + 1;
	}else{
		selisih = (hari.indexOf(hari2)) - (hari.indexOf(hari1));
	}

	console.log(selisih);
}	

function urutAngka(a,b,c,d){
	
	var angka = [parseInt(a),parseInt(b),parseInt(c),parseInt(d)];
	console.log("Sebelum disorting");
	for(i=0;i<angka.length;i++){
		console.log(angka[i]);
	}

	for(var i=1;i<angka.length;i++){
		for(var j=angka.length-1;j>=i;j--){
		if(angka[j]<angka[j-1]){
				var temp = angka[j];
		  angka[j]=angka[j-1];
		  angka[j-1]=temp
		}
	  }
	}

	console.log("Sesudah disorting");
	for(i=0;i<angka.length;i++){
		console.log(angka[i]);
	}

	
}