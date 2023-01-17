import { LightningElement, wire} from 'lwc';
import {getPicklistValues, getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACC_OBJ from '@salesforce/schema/Account'
import INDUSTRY_FIELD from'@salesforce/schema/Account.Industry'
import TYPE_FIELD from'@salesforce/schema/Account.Type'

export default class GetPicklistValues extends LightningElement {

    industryOption=[]
    selectedIndustry=''
    typeOption=[]
    selectedType=''
    @wire (getObjectInfo,{objectApiName:ACC_OBJ})
    objectInfoHandler

    @wire(getPicklistValues,{recordTypeId:'$objectInfoHandler.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    picklistHandler({data,error}){
        if(data){
            console.log(data)
            this.industryOption = [...this.generatePicklist(data)]
        }
        if(error){
            console.log(error)
        }
    }
    handleChange(event){
        this.selectedIndustry = event.target.value
    }

    @wire(getPicklistValues,{recordTypeId:'$objectInfoHandler.data.defaultRecordTypeId', fieldApiName:TYPE_FIELD})
    picklistTypeHandler({data,error}){
        if(data){
            console.log(data)
            this.typeOption = [...this.generatePicklist(data)]
        }
        if(error){
            console.log(error)
        }
    }
    handleTypeChange(event){
        this.selectedType = event.target.value
    }
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
}