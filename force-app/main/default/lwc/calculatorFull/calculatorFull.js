import { LightningElement } from 'lwc';

export default class CalculatorFull extends LightningElement {

    value=''
    operations;
    var1;
    var2;
    result=''

    handleClick(event){
        this.operations = event.target.name;
        var1 = event.target.value
        var2 = event.target.value
    }

    perform(){
        if(this.operations == plus){

        }if(this.operations == minus){

        }if(this.operations == multiply){

        }if(this.operations == divide){
            
        }
    }
}