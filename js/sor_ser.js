$('#datas').sortable({
    update: function(){
        var log = $(this).sortable("toArray");
        $("#log").text(log);
    }
  });
  