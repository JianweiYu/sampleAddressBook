package com.example.sampleContacts.dao;

import java.util.Comparator;

import com.example.sampleContacts.entity.Contact;
import com.google.inject.Singleton;

@Singleton
public class ContactDao extends BaseDao<Contact> {

    public final static Comparator<Contact> SORT_BY_TITLE = new Comparator<Contact>() {
        @Override
        public int compare(Contact o1, Contact o2) {
            return o1.getLastName().compareTo(o2.getLastName());
        }
    };
    
    public ContactDao(){
        defaultSort = SORT_BY_TITLE;
    }
    
    
}
