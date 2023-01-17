import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class RecForm extends LightningElement {

    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE]

    ObjectApiName = ACCOUNT_OBJECT
    recordId
    successHandler(event){
        this.recordId = event.detail.id
        const CustEvent = new ShowToastEvent({
            message:'RecordId'+this.recordId,
            title:'Record is Created successfully!!!',
            variant:'success'
        })
        this.dispatchEvent(CustEvent)
    }
}