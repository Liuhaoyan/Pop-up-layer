require(['jquery','dialog'],function ($,Dialog) {
    $('#btn').on('click',function () {
        var settings={
            width:'500',
            height:'300',
            title:'我的弹出层',
            content:'login.html'
        };
       var dialog=new Dialog(settings);
        dialog.open();
    })
});