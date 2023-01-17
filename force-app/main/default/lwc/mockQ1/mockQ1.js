import { LightningElement,wire,track } from 'lwc';
import getAcc from '@salesforce/apex/mockInterview1.getAcc'
const actions=[
    {label:'show', name:'Show'},
]
const Col=[
    {label:'Name',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'Industry',fieldName:'Industry'},
    {
        type:'show',
        typeAttributes:{rowActions:actions}
    }
]
export default class MockQ1 extends LightningElement {

    accounts
    @track selectedData=[]
    @track accountId
    @track datarow
    @track columns = Col
    @wire(getAcc)
    accountsGet({data,error}){
        if(data){
            this.accounts = data
            Array.from(data,(item=>{
                this.accountId= item.Id
            }))
        }if(error){
            console.log(error)
        }
    }
    selectHandler(event){
        const accIds=event.currentTarget.dataset.recordId;    
    console.log(event.currentTarget.dataset.recordId)
    }   
}