import { LightningElement,wire, api } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import NAME from '@salesforce/schema/Account.Name'
import INDUSTRY from'@salesforce/schema/Account.Industry'
import RATING from '@salesforce/schema/Account.Rating'
import ANNUAL from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordModulePractice extends LightningElement {

    name
    industry
    rating
    revenue
    @api recordId
    @wire(getRecord,{recordId:'$recordId', fields:[NAME,INDUSTRY,RATING,ANNUAL]})
    recordHandler({data,error}){
        if(data){
            console.log(data)
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.industry = data.fields.Industry.displayValue ? data.fields.Industry.displayValue : data.fields.Industry.value
            this.rating = data.fields.Rating.displayValue ? data.fields.Rating.displayValue : data.fields.Rating.value
            this.revenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
        }
        if(error){
            console.log(error)
        }
    }
}