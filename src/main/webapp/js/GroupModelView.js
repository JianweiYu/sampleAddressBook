(function() {

    brite.registerView("GroupModelView",{

        create: function(){
            return render("GroupModelView");
        },
        postDisplay: function(){
            var view = this;
        },
        events : {
            "click; .cancel" : function(e){
                var view = this;
                view.$el.remove();
            },
            "click; .create" : function(e){
                var view = this;
                var groupName = view.$el.find("input").val();
                if(groupName == ""){
                    alert("Need to add the name.");
                }else{
                    app.groupDao.save({name:groupName}).done(function(){
                        view.$el.trigger("DO_REFRESH");
                        view.$el.remove();
                    });
                }
            }
        }
    });

})();