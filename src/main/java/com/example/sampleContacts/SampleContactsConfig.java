package com.example.sampleContacts;

import com.britesnow.snow.web.auth.AuthRequest;
import com.example.sampleContacts.web.AppAuthRequest;
import com.google.inject.AbstractModule;

/**
 * TODO: Rename the package and the class name to fit your application naming convention and 
 * update /webapp/WEB-INF/snow.properties "snow.webApplicationModules" accordingly 
 * 
 * TODO: add/remove bindings to fit your application's need
 * 
 */
public class SampleContactsConfig extends AbstractModule {

    @Override
    protected void configure() {
        bind(AuthRequest.class).to(AppAuthRequest.class);
    }

}
