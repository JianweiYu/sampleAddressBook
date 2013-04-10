package com.example.sampleContacts.web;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Singleton;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.sampleContacts.entity.User;

@Singleton
public class LoginWebHandlers {

    
    @WebActionHandler
    public Map login(@WebParam("userName")String userName, @WebParam("pwd")String pwd, RequestContext rc){
        Map res = new HashMap();
        
        // For this sample app, same hardcoded password for everybody "demo" and 
        // auto "registration"
        if ("demo".equals(pwd)){
            User user = new User();
            user.setUserName(userName);
            user.setPassword(pwd);
            
            // for this sample app, we just store the User object in the http session, 
            // but in prod, should implement stateless secure login.
            rc.getReq().getSession().setAttribute("user", user);
            
            res.put("success",true);
        }else{
            res.put("success",false);
        }
        
        return res;
    }
}
