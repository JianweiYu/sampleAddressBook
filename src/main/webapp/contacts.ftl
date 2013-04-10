<a class="top-left" href="${_r.contextPath}/">Back to index</a>
<div class="form-inline add-contact-form" style="width:600px;margin: 20px auto;">
  <input type="text" name="firstName" class="input" autofocus="autofocus" placeholder="firstName">
  <input type="text" name="lastName" class="input" placeholder="lastName">
  <button  type="submit" class="btn">Add</button>
</div> 

<script type="text/javascript">

// logic to add a contact
$(document).ready(function(){
  var $addContactForm = $(".add-contact-form");
  
  $addContactForm.on("keyup","input",function(event){
    if (event.which === 13){
      submitAddContact();
    }
  });
  
  $addContactForm.on('click',"button[type='submit']",submitAddContact);
  
  function submitAddContact(){
    var firstName = $addContactForm.find("[name='firstName']").val();
    var lastName = $addContactForm.find("[name='lastName']").val();
    $.ajax({type:"POST",
            url:"daoContactCreate.do",
            dataType: "json",
            data:{firstName:firstName,lastName:lastName}}).done(function(data){
              if (typeof data.id !== "undefined"){
                window.location = window.location.href;
              }else{
                console("error, data unknown",data);
              }
            });    
  }
});  

// logic to delete a contact
// Note: we can use delegate here
$(document).on("click",".del-contact",function(){
  var $contact = $(this).closest("[data-entity='Contact']");
  var contactId = $contact.attr("data-entity-id");
  $.ajax({type:"POST",
          url:"daoContactDelete.do",
          dataType: "json",
          data:{id:contactId}}).done(function(data){
            if (typeof data.deletedId !== "undefined"){
              window.location = window.location.href;
            }else{
              console.log("error, data unknown",data);
            }
          });    
});

</script>  
  
<table class="table" style="width:600px;margin: 20px auto;">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th width="20px"></th>
    </tr>
  </thead>
  <tbody>
    [#list contactList as contact]
    <tr data-entity="Contact" data-entity-id="${contact.id}">
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td width="20px"><i class="icon-trash del-contact"></i></td>
    </tr>
    [/#list]
    
  </tbody>
</table>
