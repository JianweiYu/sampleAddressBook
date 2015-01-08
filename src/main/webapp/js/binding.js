var app = app || {};

(function(){

    // --------- Remote --------- //
    app.contactDao = brite.registerDao(new brite.RemoteDaoHandler("Contact"));
    app.groupDao  = brite.registerDao(new brite.RemoteDaoHandler("Group"));
    // --------- /Remote --------- //


})();