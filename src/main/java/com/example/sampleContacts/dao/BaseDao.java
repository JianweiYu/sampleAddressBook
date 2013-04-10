package com.example.sampleContacts.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.example.sampleContacts.AppException;
import com.example.sampleContacts.entity.BaseEntity;
import com.google.common.base.Predicate;

/**
 * This is a simple BaseDao with a very basic in memory store. For any production system, 
 * obviously use another storage interface.  
 * 
 * @author jeremychone
 *
 * @param <E>
 */
@SuppressWarnings({"rawtypes", "unchecked"})
public class BaseDao<E extends BaseEntity> {
    public static final int DEFAULT_PAGE_NUM = 1;
    public static final int DEFAULT_PAGE_SIZE = 1;
    
    public enum ERROR{
        USER_ALREADY_EXISTS, 
        CANNOT_UPDATE_ENTITY_NO_ID;
    }
    
    protected Class<E> entityClass;
    
    protected Map<Long,E> store = new ConcurrentHashMap<Long,E>();
    
    protected long seq = 0;
    
    protected Comparator<E> defaultSort;

    
    private synchronized long incSeq(){
        seq++;
        return seq;
    }
    
    private synchronized void seqAbove(Long l){
        if (l > seq){
            seq = l + 1;
        }
    }
    // --------- IDao Interface Implementation --------- //
    public E create(E entity) {
        Long id = entity.getId(); 

        if (id != null){
            if (store.get(id) != null){
                throw new AppException(ERROR.USER_ALREADY_EXISTS);
            }
            // if it does not exist, make sure, the seq is above this id
            seqAbove(id);
        }else{
            id = incSeq();
            entity.setId(id);
        }
        
        store.put(id, entity);
        return entity;
    }
    
    public E get(Long id) {
        return store.get(id);
    }

    public E update(E entity){
        Long id = entity.getId();
        // check if id is present
        // for now, just put this entity in the store. 
        if (id != null){
            store.put(id,entity);
        }else{
            throw new AppException(ERROR.CANNOT_UPDATE_ENTITY_NO_ID);
        }
        return entity;
    }
    
    public E delete(Long id) {
        E e = store.get(id);
        store.remove(id);
        return e;
    }

    public List<E> list(){
        return list(1,3000,null,null);
    }
    
    public List<E> list(int pageNum, int pageSize, Predicate<E> filter, Comparator<E> comparator) {
        List<E> result = new ArrayList<E>();
        
        int minIdx = (pageNum * pageSize - pageSize) - 1;
        int maxIdx = minIdx + pageSize; 
        int idx = 0;
        for (E entity : store.values()){
            boolean addIt = true;
            if (filter != null && !filter.apply(entity)){
                addIt = false;
            }
            if (addIt && (idx < minIdx || idx > maxIdx )){
                addIt = false;
            }
            if (addIt){
                result.add(entity);
            }
        }
        
        
        if (comparator == null){
            comparator = defaultSort;
        }
        if (comparator != null){
            Collections.sort(result,comparator);
        }
        return result;
    }
    


    public Long count() {
        return (long) store.size();
    }

    public Long count(Predicate filter) {
        int c = 0;
        for (E entity : store.values()){
            if (filter.apply(entity)){
                c++;
            }
        }
        return (long) c;
    }

    // --------- /IDao Interface Implementation --------- //    
    

}