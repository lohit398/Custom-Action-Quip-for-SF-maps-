public class DE_QuipCreatorApex {
    @AuraEnabled
    public static Integer updateEvent(String eventId, String quipLink){
        String query = 'SELECT Id,WhatId,Meeting_Notes__c from Event where Id =\''+eventId+'\'';
        SObject sobj = Database.query(query);
        sobj.put('Meeting_Notes__c',quipLink);
        UPDATE sobj;
        return 1;
    }
}