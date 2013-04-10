<div id="loginform">
  <!-- If the user has not be set, then, we display the login form -->
  <p>You are not logged in, please login with any name and 'demo' as password</p>
  <div class="form-inline">
    <input id="login-username" type="text" class="input" placeholder="any name">
    <input id="login-pwd" type="password" class="input" placeholder="pwd (enter 'demo')">
    <div class="control-group error">
      <span id="login-error" class="help-inline"></span>
    </div>
    <button id="login-btn" type="submit" class="btn">Sign in</button>
  </div>    
</div>

<script type="text/javascript">
$(document).ready(function(){
  var $username = $("#login-username");
  var $pwd = $("#login-pwd");
  var $btn = $("#login-btn");
  var $error = $("#login-error");
  
  $btn.on("click",function(){
    $.ajax({type:"POST",
            url:"login.do",
            dataType: "json",
            data:{userName:$username.val(),pwd:$pwd.val()}}).done(function(data){
              if (data.success){
                window.location = window.location.href;
              }else{
                $error.html("wrong user/password. Hint: try 'demo' as password, might be it is hardcoded");
              }
            });
    
  });
    
});
</script>