import { LightningElement,api } from 'lwc';

export default class CommunicateParentChildC extends LightningElement {

    @api message

    message = ' I am from Child '
}