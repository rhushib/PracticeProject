import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistRecordType extends LightningElement {

    selectedIndustry=''
    selectedRating=''
    optionIndustry=[]
    optionRating=[]
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    infoHandler

    @wire (getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$infoHandler.data.defaultRecordTypeId'})
    valueByRecord({data,error}){
        if(data){
            console.log(data)
            this.optionIndustry = [...this.generatePicklist(data.picklistFieldValues.Industry)]
            this.optionRating = [...this.generatePicklist(data.picklistFieldValues.Rating)]
        }
        if(error){
            console.log(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({'label':item.label,'value':item.value}))
    }

    handleChange(event) {
        const{name,value} = event.target
        if(name === 'Inustry'){
            this.selectedIndustry = value
        }
        if(name === 'Rating'){
            this.selectedRating = value
        }
    }
}