(function() {

    brite.registerView("UserModelView",{

        create: function(data){
            return render("UserModelView",data);
        },
        postDisplay: function(data){
            var view = this;
            view.groupId = data.groupId
            view.userId = data.id;
        },
        events : {
            "click; .cancel" : function(e){
                var view = this;
                view.$el.remove();
            },
            "click; .create" : function(e){
                var view = this;
                var info = {};
                info.name = view.$el.find(".name").val();
                info.address = view.$el.find(".address").val();
                info.tel = view.$el.find(".tel").val();
                if(info.name == "" || info.address == "" || info.tel == ""){
                    alert("Need to fill the blank.");
                }else{
                    if(view.groupId){
                        info.groupId = view.groupId;
                        main.usersDao.create(info).done(function(){
                            view.$el.trigger("DO_REFRESH");
                            view.$el.remove();
                        });
                    }else{
                        info.id = view.userId;
                        main.usersDao.update(info).done(function(){
                            view.$el.trigger("DO_REFRESH");
                            view.$el.remove();
                        });
                    }
                }
            }
        }
    });

})();