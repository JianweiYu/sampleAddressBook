package com.example.sampleContacts.dao;

import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.example.sampleContacts.entity.Contact;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import java.util.List;

@Singleton
public class ContactDao implements DaoInterface<Contact> {
    @Inject
    private HibernateDaoHelper daoHelper;

    @Override
    public Contact save(Contact contact) {
        return daoHelper.save(contact);
    }

    @Override
    public Contact get(Integer id) {
        return daoHelper.get(Contact.class,id);
    }

    @Override
    public void delete(int id) {
        daoHelper.delete(Contact.class,id);
    }

    @Override
    public List<Contact> list() {
        return (List<Contact>) daoHelper.find(0,1000,"from "+Contact.class.getSimpleName());
    }

    @Override
    public Contact update(Contact contact) {
        return daoHelper.update(contact);
    }

}
