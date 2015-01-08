package com.example.sampleContacts.web;

import com.britesnow.snow.util.MapUtil;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampleContacts.dao.ContactDao;
import com.example.sampleContacts.dao.GroupDao;
import com.example.sampleContacts.entity.Contact;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Singleton
public class ContactWebHandlers {

    @Inject
    private ContactDao contactDao;

    @Inject
    private GroupDao groupDao;

    @WebPost("/Contact/save")
    public WebMessage save(@WebParam("name")String name,@WebParam("address")String address,@WebParam("tel")Integer tel,@WebParam("groupId")Integer groupId){
        Contact contact = new Contact();
        contact.setName(name);
        contact.setAddress(address);
        contact.setTel(tel);
        contact.setGroupId(groupId);
        contact = contactDao.save(contact);
        return WebMessage.success(contact);
    }

    @WebGet("/Contact/list")
    public WebMessage list(){
        List<Map> contactsWithGroup = new ArrayList<Map>();
        List<Contact> contacts = contactDao.list();
        for(Contact contact:contacts){
            contactsWithGroup.add(MapUtil.mapIt(
                    "id", contact.getId(),
                    "name", contact.getName(),
                    "address", contact.getAddress(),
                    "tel", contact.getTel(),
                    "groupId", contact.getGroupId()));
        }
        return WebMessage.success(contactsWithGroup);
    }

    @WebPost("/Contact/delete")
    public WebMessage del(@WebParam("id")Integer id){
        contactDao.delete(id);
        return WebMessage.success("");
    }

    @WebGet("/Contact/get")
    public WebMessage get(@WebParam("id")Integer id){
        Contact c = contactDao.get(id);
        Map result = MapUtil.mapIt("id", c.getId(),"name", c.getName(), "address", c.getAddress(), "tel", c.getTel(), "groupId", c.getGroupId());
        return WebMessage.success(result);
    }

    @WebPost("/Contact/update")
    public WebMessage update(@WebParam("id")Integer id,@WebParam("name")String name,@WebParam("address")String address,@WebParam("tel")Integer tel,@WebParam("groupId")Integer groupId){
        Contact contact = new Contact();
        contact.setId(id);
        contact.setName(name);
        contact.setAddress(address);
        contact.setTel(tel);
        contact.setGroupId(groupId);

        return WebMessage.success(contactDao.update(contact));
    }
}
