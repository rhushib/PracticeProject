import { LightningElement,wire } from 'lwc';
import MYCHANNEL from '@salesforce/messageChannel/MyMessageChannel__c'
import { publish, MessageContext } from 'lightning/messageService';
export default class PublishComp extends LightningElement {

    inputValue

    @wire(MessageContext)
    context

    changeHandler(event){
        this.inputValue = event.target.value
    }
    
    clickHandler(){

        const message = {
            lmsData:{
                value:this.inputValue
            }
        }
        publish(this.context, MYCHANNEL, message)
    }

}