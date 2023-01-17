import { LightningElement, } from 'lwc';
import findAccounts from '@salesforce/apex/accountController.getAccountList'

export default class ApexClassCall extends LightningElement {
    value
    acc
    key=''

    handleChange(event){
        this.key = event.target.value
    }

    handleClick(){
        findAccounts({searchKey : key}).then(res=>{
            this.acc = res
        }).catch(error=>{
            console.log(error)
        })
    }
}
