import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from'@salesforce/schema/Contact'
import { updateRecord } from 'lightning/uiRecordApi';
const COL =[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone',editable:true},
    {label:'Email',fieldName:'Email',editable:true},
    {label:'Owner',fieldName:'Owner'},
]
export default class GetUpdateRecordModule extends LightningElement {

    contacts=[]
    draftValues=[]
    columns=COL
    @wire(getListUi,{
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts',
        pageSize:20
    })
    listViewHandler({data,error}){
        if(data){
            console.log(data)
            this.contacts=data.records.records.map(item=>{
                return {
                'Id':this.getValues(item,'Id'),
                'Name':this.getValues(item,'Name'),
                'Phone':this.getValues(item,'Phone'),
                'Email':this.getValues(item,'Email'),
                'Owner':this.getValues(item, 'Owner')
                }
            })
        }
        if(error){
            console.log(error)
        }
    }

    getValues(data, field){
        return data.fields[field].value
    }

    handleSave(event){
        console.log(event.detail.draftValues)
        const recordInputs=event.target.draftValues.map(draft=>{
            const fields={...draft}
            return {fields:fields}
        })
        const promises= recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('Contact Updated successfully !!!')
            this.draftValues=[]
        }).catch(error=>{
            console.log(error)
        })
    }
}