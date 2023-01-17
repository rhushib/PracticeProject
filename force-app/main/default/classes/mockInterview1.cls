public with sharing class mockInterview1 {
    @AuraEnabled(cacheable=true)
    public static list<account> getAcc(){
        list<account> acclist =[select id,name,rating, industry, ownership from account];
        return acclist;
    }

    @AuraEnabled
    public static list<contact> getContacts(string accId){
        list<contact> conlist = [select id, firstName, LastName, Phone, Email from contact where accountid in: accId];
        return conlist;
    }
    
}
