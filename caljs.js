let data="";
function appendnum(num)
{
    data+=num;
    console.log(data);
    document.getElementById('display').value=data;
}
function appendop(op)
{
    data+=op;
    console.log(data);
    document.getElementById('display').value=data;
}
function clean()
{
    data="";
   document.getElementById('display').value=data;
}
function calculate()
{
    try{
    let res=eval(data);
    document.getElementById('display').value=res;
    data="";
    console.log("result",res);
    }
    catch{
        document.getElementById('display').value="error";
        data="";
    }
}