function getHistory(){
    return document.getElementById("record-value").innerText;
}
function printHistory(num){
    document.getElementById("record-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-value")
    .innerText=(num);
}
    else{
    document.getElementById("output-value")
    .innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n =Number(num);
    var value = n.toLocaleString("en")
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){
       if(this.id=="clear"){
             printHistory("");
             printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){ // if output has a value
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var record=getHistory();
            if(output==""&&record!=""){
                if(isNaN(record[record.length-1])){
                    record= record.substr(0,record.length-1);
                }
            }

            if(output !=="" || record !=""){
                //condition? tru:false
                output= output==""?
                output:reverseNumberFormat(output);
                record=record+output;
                if(this.id=="="){
                    var result=eval(record);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    record=record+this.id;
                    printHistory(record);
                    printOutput("");
                }
            }
            
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
        
    });
}
