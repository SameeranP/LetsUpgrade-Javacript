let n = prompt("Enter n: ");
let arr = [];
function isPrime(x){
    
        for(j = 2;j<x;j++){
            if(x%j == 0){
                return false
            }
        }
}


if (n>1){
    for(i=2;i<=n;i++){
        if(isPrime(i) != false)
        {   arr.push(i)
            console.log(i);

        }
    }
    alert(arr)
}
else{alert("Input invalid")}

