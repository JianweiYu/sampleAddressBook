package com.example.sampleContacts.web;


public class WebMessage {

    private boolean success ;

    private Object result;

    public static WebMessage success(Object result){
        return new WebMessage().setSuccess(true).setResult(result);
    }

    public static WebMessage fail(Object result){
        return new WebMessage().setSuccess(false).setResult(result);
    }

    public boolean isSuccess() {
        return success;
    }

    public WebMessage setSuccess(boolean success) {
        this.success = success;
        return this;
    }

    public Object getResult() {
        return result;
    }

    public WebMessage setResult(Object result) {
        this.result = result;
        return this;
    }
}
