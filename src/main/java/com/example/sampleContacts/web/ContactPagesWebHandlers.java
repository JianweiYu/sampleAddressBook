package com.example.sampleContacts.web;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.inject.Singleton;

import com.britesnow.snow.web.handler.annotation.WebModelHandler;
import com.britesnow.snow.web.param.annotation.WebModel;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.sampleContacts.dao.ContactDao;
import com.example.sampleContacts.entity.Contact;

@Singleton
public class ContactPagesWebHandlers {

    @Inject
    private ContactDao contactDao;
    
    @WebModelHandler(startsWith="/contacts")
    public void pageContacts(@WebModel Map m){
        List<Contact> contacts = contactDao.list();
        m.put("contactList",contacts);
    }
    
    @WebModelHandler(startsWith="/contact")
    public void pageProfile(@WebModel Map m, @WebParam("id")Contact contact){
        m.put("contact", contact);
    }
}
