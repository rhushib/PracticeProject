public with sharing class wireCallClass {
    @AuraEnabled(cacheable=true)
    public static list<account> wireCallClass1() {
        return [select id, name, industry, rating from account LIMIT 10];
    }
}