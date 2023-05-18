


function expensive(){
    let sum=0;

    for (let i=0;i<10000000000;i++){
        sum=sum+i;
    }
    return sum;
}

process.send({value: expensive(),event:"expensive"})

