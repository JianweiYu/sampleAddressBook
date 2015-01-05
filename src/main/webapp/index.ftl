<div id="indexPage">

  <h1>Congratulation, you got SampleContacts working!</h1>
  
  <h2>What is SampleContacts?</h2>

  <p>Just a very simple prototype for showing the main concepts of Snow. It implements an extremely basic CRUD functionality (contact list) following 
    some of the Snow best practices. This is not really a demo as it is very raw code, but rather a tutorial type of application.</p>

  
  <p>Here are the main aspects of this demo app:</p>  
  
  <ul>
    <li><a href="${_r.contextPath}/contacts">/contacts</a> is the contact list page, which allows to add and delete contacts by 
      calling the appropriate REST API implemented by the various WebHandlers Java methods.</li>
    <li><a href="${_r.contextPath}/daoContactList.json">/daoContactList.json</a> is an example of a .json REST api to list all the contacts
      (used by the /contacts) page.</li>
    <li><a href="${_r.contextPath}/daoContactGet.json?id=1">/daoContactGet.json?id=1</a> is an example of a .json REST api get a 
      single element.</li>      
    <li><a href="${_r.contextPath}/contact?id=1">/contact?id='1'</a> is an example of a page based approach to display some entity info.</li>

    <li><a href="${_r.contextPath}/AddressBook">/AddressBook</a>Address Book Practice</li>

  </ul>
  
</div>