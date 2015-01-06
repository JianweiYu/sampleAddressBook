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
			main.groupsDao.remove(groupId).done(function(){
				refreshInfo.call(view);
			});
		},
		"click; .add-user" : function(e){
			var view = this;
			var ctn = $(e.currentTarget).closest(".group-ctn");
			var groupId = ctn.attr("data-entity-id");
			brite.display("UserModelView","body",{groupId:groupId});
		},
		"click; .delete-user" : function(e){
			var view = this;
			var userId = $(e.currentTarget).closest(".user-info").find(".userId").text();
			main.usersDao.remove(userId).done(function(){
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
		main.groupsDao.list().done(function(groupList){
			for(var i=0;i<groupList.length;i++){
				var html = render("group-items",groupList[i]);
				view.$content.append(html);
			}
		});

		main.usersDao.list().done(function(user){
			for(var i=0;i<user.length;i++){
				view.$content.find(".group-ctn").each(function(){
					var groupId = $(this).attr("data-entity-id");
					var $userItem = $(this).find(".user-info-ctn");
					if(groupId == user[i].groupId){
						var html = render("user-items",user[i]);
						$userItem.append(html);
					}
				});
			}
		});
	}
})();