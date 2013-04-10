package com.example.sampleContacts.web;

import javax.inject.Inject;
import javax.inject.Singleton;

import com.britesnow.snow.util.AnnotationMap;
import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.param.resolver.annotation.WebParamResolver;
import com.example.sampleContacts.dao.ContactDao;
import com.example.sampleContacts.entity.Contact;

@Singleton
public class AppWebParamResolvers {

    @Inject
    private ContactDao contactDao;
    
    @WebParamResolver
    public Contact resolveContact(AnnotationMap annotationMap, Class paramType, RequestContext rc) {
        WebParam webParam = annotationMap.get(WebParam.class);
        String paramName = webParam.value();
        Long contactId = rc.getParamAs(paramName, Long.class,null);
        return contactDao.get(contactId);
    }
}
