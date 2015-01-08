package com.example.sampleContacts.dao;


import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.example.sampleContacts.entity.Group;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import java.util.List;

@Singleton
public class GroupDao implements DaoInterface<Group> {

    @Inject
    private HibernateDaoHelper daoHelper;

    @Override
    public Group save(Group group) {
        return daoHelper.save(group);
    }

    @Override
    public Group get(Integer id) {
        return daoHelper.get(Group.class,id);
    }

    @Override
    public void delete(int id) {
        daoHelper.delete(Group.class,id);
    }

    @Override
    public List<Group> list() {
        return (List<Group>) daoHelper.find(0,1000,"from "+Group.class.getSimpleName());
    }

    @Override
    public Group update(Group group) {
        return daoHelper.update(group);
    }
}
