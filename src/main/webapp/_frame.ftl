<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>sampleContacts: Basic Snow Sample App</title>
    
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/mainView.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/GroupModelView.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/UserModelView.css">
    
    <script type="text/javascript" src="${_r.contextPath}/js/jquery.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/handlebars.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/brite.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/templates.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/main.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/GroupModelView.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/UserModelView.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/brite.InMemoryDaoHandler.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/MainView.js"></script>
    
  </head>

  <body>
    
    [#if _r.user??]
      <!-- Note: "includeFrameContent" is a Snow specific freemarker directive that allow to include the targeted template
        for this URL respecting the "_frame.ftl" hierarchy  -->
      [@includeFrameContent /]
    [#else]
      [@includeTemplate name="loginform.ftl"/] 
    [/#if]
  </body>
</html>