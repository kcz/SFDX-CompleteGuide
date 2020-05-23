trigger AccountTrigger on Account (before insert, before update) {
    SFDX_Course.AccountTriggerHandler.setAccountNames(Trigger.new);
}