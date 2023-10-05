function myFunction(){
    console.log("Hello world");
}
function myCalCulator(num1,num2,myCallBack){
        let sum = num1+num2;
        myCallBack(sum)
}
myCalCulator(10,10,myFunction);