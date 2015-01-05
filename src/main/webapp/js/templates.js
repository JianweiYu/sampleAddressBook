Handlebars.templates = Handlebars.templates || {};


// template --- GroupModelView ---
Handlebars.templates['GroupModelView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"GroupModelView\">\n	<div class=\"modal\">\n		<div class=\"modal-dialog\">\n			<div class= modal-content\">\n				<div class=\"modal-header\">\n					<div class=\"modal-title\">Add Group</div>\n				</div>\n				<div class=\"modal-body\">\n			    	<div class=\"form-group\">\n        				<label class=\"control-label\">GroupName:</label>\n        				<input class=\"form-control\" type=\"text\">\n        			</div>\n				</div>\n				<div class=\"modal-footer\">\n					<button type=\"button\" class=\"btn btn-default cancel\">Cancel</button>\n					<button type=\"button\" class=\"btn btn-primary create\">Save</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
  },"useData":true}
);

// template --- MainView ---
Handlebars.templates['MainView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"MainView\">\n    \n    <div class=\"MainView-topNav\">\n      <h2>Address Book</h2>\n      <button type=\"button\" class=\"btn btn-default add-group\">\n        Add Group\n      </button>\n    </div>\n    \n    <div class=\"MainView-content\">\n\n    </div>\n  </div>";
  },"useData":true}
);

// template --- group-items ---
Handlebars.templates['group-items'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"group-ctn\" data-entity=\"group\" data-entity-id="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + ">\n  <div class=\"group-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n    <a class=\"delete-group\">\n      Delete\n    </a>\n    <a class=\"add-user\">\n      Add User\n    </a>\n  </div>\n  <div class=\"address-box\">\n    <div class=\"user-info-title\">\n      <div class=\"userId info\">Id</div>\n      <div class=\"username info\">username</div>\n      <div class=\"address info\">address</div>\n      <div class=\"tel info\">telephone</div>\n      <div class=\"delete info\">delete</div>\n    </div>\n    <div class=\"user-info-ctn\">\n\n    </div>\n  </div>\n</div>";
},"useData":true}
);

// template --- user-items ---
Handlebars.templates['user-items'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"user-info\">\n  <div class=\"userId info\">"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</div>\n  <a class=\"username info\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n  <div class=\"address info\">"
    + escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"tel info\">"
    + escapeExpression(((helper = (helper = helpers.tel || (depth0 != null ? depth0.tel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tel","hash":{},"data":data}) : helper)))
    + "</div>\n  <a class=\"delete-user info\">X</a>\n</div>";
},"useData":true}
);

// template --- UserModelView ---
Handlebars.templates['UserModelView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"UserModelView\">\n	<div class=\"modal\">\n		<div class=\"modal-dialog\">\n			<div class= modal-content\">\n				<div class=\"modal-header\">\n					<div class=\"modal-title\">Add User</div>\n				</div>\n				<div class=\"modal-body\">\n			    	<div class=\"form-group\">\n        				<label class=\"control-label\">UserName:</label>\n        				<input class=\"form-control name\" type=\"text\" value="
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ">\n        			</div>\n                    <div class=\"form-group\">\n        				<label class=\"control-label\">address:</label>\n        				<input class=\"form-control address\" type=\"text\" value="
    + escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + ">\n        			</div>\n                    <div class=\"form-group\">\n        				<label class=\"control-label\">telephone:</label>\n        				<input class=\"form-control tel\" type=\"text\" value="
    + escapeExpression(((helper = (helper = helpers.tel || (depth0 != null ? depth0.tel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tel","hash":{},"data":data}) : helper)))
    + ">\n        			</div>\n				</div>\n				<div class=\"modal-footer\">\n					<button type=\"button\" class=\"btn btn-default cancel\">Cancel</button>\n					<button type=\"button\" class=\"btn btn-primary create\">Save</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true}
);
