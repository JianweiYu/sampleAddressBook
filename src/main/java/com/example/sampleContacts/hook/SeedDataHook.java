package com.example.sampleContacts.hook;

import com.britesnow.snow.web.db.hibernate.HibernateSessionInViewHandler;
import com.britesnow.snow.web.hook.AppPhase;
import com.britesnow.snow.web.hook.annotation.WebApplicationHook;
import com.example.sampleContacts.dao.ContactDao;
import com.example.sampleContacts.dao.GroupDao;
import com.example.sampleContacts.entity.Contact;
import com.example.sampleContacts.entity.Group;
import com.google.inject.Singleton;

import java.util.ArrayList;
import java.util.List;

@Singleton
public class SeedDataHook {
    private String[] groups = {"Family","Friend","Classmates"};

    @WebApplicationHook(phase = AppPhase.INIT)
    public void seedStore(GroupDao groupDao, ContactDao contactDao, HibernateSessionInViewHandler inView) {
        inView.openSessionInView();
        List<Group> groupIds = new ArrayList<Group>();
        for(String name:groups) {
            groupIds.add(groupDao.save(new Group(name)));
        }

        List<Contact> contactList = new ArrayList<Contact>();


        contactList.add(new Contact("Jet","Beijing",110));
        contactList.add(new Contact("Marry","London",119));
        contactList.add(new Contact("pottery","NewYork",120));

        for(Contact c:contactList) {
            c.setGroupId(groupIds.get((int)(Math.random()*groupIds.size())).getId());
            contactDao.save(c);
        }

        inView.closeSessionInView();
    }



}
