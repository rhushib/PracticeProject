import { LightningElement,wire } from 'lwc';
import MYCHANNEL from '@salesforce/messageChannel/MyMessageChannel__c'
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class SubscripComp extends LightningElement {

    receivedMessage

    @wire(MessageContext)
    context
    
    connectedCallback(){
        this.subscribeHandler()
    }
    subscribeHandler(){
        subscribe(this.context, MYCHANNEL, (message)=>{this.publishHandler(message)},{scope:APPLICATION_SCOPE})
    }

    publishHandler(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No Data Passed"
    }

}