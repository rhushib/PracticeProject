import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import PHONE from '@salesforce/schema/Contact.Phone'

export default class RecEditForm extends LightningElement {

    recordId
    objectName=CONTACT_OBJECT
    fields={
        First:FIRST_NAME,
        Last:LAST_NAME,
        MailField:EMAIL,
        PhoneField:PHONE
    }

    resetHandler(){
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
        Array.from(inputFields).forEach(field => {
            field.reset();
        });
        }
    }
    successHandler(event){
        this.recordId = event.detail.id
        alert('ID' +this.recordId)
        
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
        Array.from(inputFields).forEach(field => {
            field.reset();
        });
    }
    }
}