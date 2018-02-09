function add(x, y) {
	return x + y;
}

function asyn(a){
    setTimeout(function(){
        let b = 2;
        b ++;
        a(b)
    })
}