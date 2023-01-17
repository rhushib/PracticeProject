import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoPractice extends LightningElement {

        
    Names=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    @wire (getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo
    
    Infos
    @wire(getObjectInfos,{objectApiNames:'$Names'})
    infoHandler({data,error}){
        if(data){
            console.log(data)
            this.Infos = data
        }
        if(error){
            console.log(error)
        }
    }

}