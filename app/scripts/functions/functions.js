/**
 * Created by TanghaoTsui on 14-7-26.
 */

function Init(Key) {
    localStorage.setItem(Key, JSON.stringify([]));
}
//Belongs to CreateController

function clickToSetActivityList(inputedString) {
        console.log("function clickToSetActivityList click")
        var ArrayActivityNameInMemory = Activity.getActivityList();
        ArrayActivityNameInMemory.unshift(inputedString);
        Activity.setActivityList(ArrayActivityNameInMemory);
        HostsLatestChoice.setChoice(inputedString);
}

function isApplicationfirstRun(inputedString) {
    return !Activity.isFilledInActivityList();
}


//Belongs to SignUpController
function ShortMessageAccept(sms) {


}


function shortMessageDevider(sms) {


    var sms_data = ShortMessageList.getList();
    var message = {};
    message.message = sms.messages[0].message;
    message.phone = sms.messages[0].phone;
    message.activity = JSON.parse(localStorage['currentActive']);
    sms_data.push(message);
    localStorage.setItem("sms_data",JSON.stringify(sms_data));
    var wrapper = angular.element(document.getElementById('wrapper')).scope();
    wrapper.$apply(function () {
        wrapper.refresh();
    });

    if(localStorage['state'] == '开始')
    {
        console.log("活动尚未开始，请稍后");
    }
    else
    {
        console.log("报名成功!");
    }

//      native_accessor.send_sms(phone, message);
    var log = console.log("报名成功!");
}



function page_refresh(){

    var refresh_page = document.getElementById('wrapper') ;
    if(refresh_page)
    {
        var scope = angular.getElement("refresh_page").scope();
        scope.$apply(function(){




        })
    }
};