(function() {

	brite.registerView("MainView",{

	create: function(){
		return render("MainView");
	},
	postDisplay: function(){
		var view = this;
		view.$content = view.$el.find(".MainView-content");
		refreshInfo.call(view);
	},
	events : {
		"click; .add-group" : function(e){
			var view = this;
			brite.display("GroupModelView","body");
		},
		"click; .delete-group" : function(e){
			var view = this;
			var ctn = $(e.currentTarget).closest(".group-ctn");
			var groupId = ctn.attr("data-entity-id");
			app.groupDao.delete(groupId).done(function(){
				refreshInfo.call(view);
			});
		},
		"click; .add-user" : function(e){
			var view = this;
			var ctn = $(e.currentTarget).closest(".group-ctn");
			var groupId = ctn.attr("data-entity-id");
			brite.display("UserModelView","body",{groupId:groupId,action:"save"});
		},
		"click; .delete-user" : function(e){
			var view = this;
			var userId = $(e.currentTarget).closest(".user-info").find(".userId").text();
			app.contactDao.delete(userId).done(function(){
				refreshInfo.call(view);
			});
		},
		"click; .edit-user" : function(e){
			var view = this;
			var info = {};
			var ctn = $(e.currentTarget).closest(".user-info");
			info.id = ctn.find(".userId").text();
			info.name = ctn.find(".username").text();
			info.address = ctn.find(".address").text();
			info.tel = ctn.find(".tel").text();
			info.groupId = $(e.currentTarget).closest(".group-ctn").attr("data-entity-id");
			brite.display("UserModelView","body",info);
		}
	},
	docEvents: {
		"DO_REFRESH": function () {
			var view = this;
			refreshInfo.call(view);
		}
	}
});


	function refreshInfo(){
		var view = this;
		view.$content.bEmpty();
		app.groupDao.list().done(function(groupList){
			var html = render("group-items",groupList);
			view.$content.append(html);
		});

		app.contactDao.list().done(function(user){
			console.log(user);
			for(var i=0;i<user.result.length;i++){
				view.$content.find(".group-ctn").each(function(){
					var groupId = $(this).attr("data-entity-id");
					var $userItem = $(this).find(".user-info-ctn");
					if(groupId == user.result[i].groupId){
						var html = render("user-items",user.result[i]);
						$userItem.append(html);
					}
				});
			}
		});
	}
})();