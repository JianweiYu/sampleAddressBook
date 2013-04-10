package com.example.sampleContacts.web;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.handler.annotation.WebModelHandler;
import com.britesnow.snow.web.param.annotation.WebModel;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.sampleContacts.dao.ContactDao;
import com.example.sampleContacts.entity.Contact;
import com.google.inject.Singleton;


@Singleton
public class ContactDaoWebHandlers {

    @Inject
    private ContactDao contactDao;
    
    @WebModelHandler(startsWith="/daoContactList")
    public void daoContactList(@WebModel Map model){
       model.put("list", contactDao.list());   
    }

    @WebModelHandler(startsWith="/daoContactGet")
    public void daoContactGet(@WebModel Map model,@WebParam("id")Long id){
        model.put("result", contactDao.get(id));  
    }

    @WebActionHandler
    public Contact daoContactCreate(@WebParam("firstName")String firstName, @WebParam("lastName")String lastName){
       Contact contact = contactDao.create(new Contact(firstName,lastName));
       return contact;
                               
    }    

    
    @WebActionHandler
    public Map daoContactDelete(@WebParam("id")Long contactId){
       Contact deletedContact = contactDao.delete(contactId); 
       
       Map m = new HashMap();
       if (deletedContact != null){
           m.put("deletedId", deletedContact.getId());
       }else{
           m.put("nodelete",true);
       }
       
       return m;
    }    

    

}
