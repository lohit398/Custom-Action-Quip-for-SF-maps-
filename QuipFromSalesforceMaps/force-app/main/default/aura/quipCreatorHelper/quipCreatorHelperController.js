({
    
    invoke : function(cmp, event, helper) {
        var action = cmp.get("c.updateEvent");
        action.setParams({ 
            eventId : cmp.get("v.eventId"),
            quipLink: cmp.get("v.quipLink")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('Quip Attached successfully to the event');
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                console.log(errors);
            }
        });
        $A.enqueueAction(action);
    }
})