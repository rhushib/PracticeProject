import { LightningElement,wire } from 'lwc';
import {getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACC_OBJ from '@salesforce/schema/Account'
import OPP_OBJ from '@salesforce/schema/Opportunity'

export default class GetObjectInfosPractice extends LightningElement {

    objectApiNames = [ACC_OBJ,OPP_OBJ];

    @wire (getObjectInfos, {objectApiName: '$objectApiNames'})
    objectInfo({data,error}){
        if(data){
            console.log(data)
        }if(error){
            console.log(error)
        }
    }
}