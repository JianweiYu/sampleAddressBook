Handlebars.templates = Handlebars.templates || {};
function render(templateName,data){
  var tmpl = Handlebars.templates[templateName];
  if (!tmpl){
    tmpl = Handlebars.compile($("#" + templateName).html());
    Handlebars.templates[templateName] = tmpl;
  }
  return tmpl(data);
}

var main = main || {};
(function(){

  var users = [
    {id:"001",name:"Jet",address:"Beijing",tel:"110",groupId:"101"},
    {id:"002",name:"Marry",address:"London",tel:"119",groupId:"102"},
    {id:"003",name:"pottery",address:"NewYork",tel:"120",groupId:"103"}
  ];

  var groups = [
    {id:"101",title:"Family"},
    {id:"102",title:"Friend"},
    {id:"103",title:"Classmates"},
  ];

  main.usersDao = brite.registerDao(new brite.InMemoryDaoHandler("User",users));

  main.groupsDao = brite.registerDao(new brite.InMemoryDaoHandler("Group",groups));


})();