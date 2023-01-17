import { LightningElement,wire,api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordPractice extends LightningElement {

    formFields=[
        {"fieldName":"AccountNumber", "label":"Account Number"},
        {"fieldName":"Name", "label":"Name"},
        {"fieldName":"Industry", "label":"Industry"},
        {"fieldName":"Rating", "label":"Rating"},
        {"fieldName":"Type", "label":"Tpye"}
    ]
    @api recordId
    @wire(getRecordUi,{recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountHandlerMethod({data,error}){
        if(data){
            console.log(data)
            this.formFields= this.formFields.map(item=>{
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.log(error)
        }
    }
}