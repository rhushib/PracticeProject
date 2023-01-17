import { LightningElement, wire } from 'lwc';
import wireCallClass from '@salesforce/apex/wireCallClass.wireCallClass1'
export default class WireCall extends LightningElement {
    
    accounts;
    @wire (wireCallClass)
    getAccount({data, error}){
        if(data){
            this.accounts = data
        }
        if(error){
            console.log(error)
        }
    }
} 