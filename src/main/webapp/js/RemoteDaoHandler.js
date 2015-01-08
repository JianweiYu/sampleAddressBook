(function($){
    var remoteDaoHandler = function(entityType){
        this.entityType = entityType;
    }

    remoteDaoHandler.prototype.save = function(data){
        return doAjax(this.entityType+"/save",data,{type:'Post'});
    }

    remoteDaoHandler.prototype.update = function(data){
        return doAjax(this.entityType+"/update",data,{type:'Post'});
    }

    remoteDaoHandler.prototype.get = function(id){
        return doAjax(this.entityType+"/get",{id:id});
    }

    remoteDaoHandler.prototype.list = function(){
        return doAjax(this.entityType+"/list");
    }

    remoteDaoHandler.prototype.delete = function(id){
        return doAjax(this.entityType+"/delete",{id:id},{type:'Post'});
    }

    var _default = {type:'Get',dataType:'json'};
    function doAjax(url,data,opts){
        console.log(data);
        opts = $.extend({},_default,opts);
        var $dfd = $.Deferred();
        $.ajax({
            url:url,
            data:data,
            type:opts.type,
            dataType:opts.dataType
        }).done(function(data){
            $dfd.resolve(data);
        }).fail(function(){
            $dfd.reject();
        });
        return $dfd.promise();
    }

    brite.RemoteDaoHandler = remoteDaoHandler;
})(jQuery);