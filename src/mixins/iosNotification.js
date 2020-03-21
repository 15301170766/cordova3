// ios的推送事件
import Qs from 'qs'
import axios from 'axios';
let push;
export default{
    data() {
        return {
            device_token:"",
            registrationType:""
        }
    },
    methods: {
      iosInit(){ // 初始化通知
        document.addEventListener("deviceready", this.onDeviceReady(), false);
      },
      onDeviceReady(){
        push = PushNotification.init({
            ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
            }
          });
          alert('初始化成功')
      },
      onDeviceReady2(){
        push = PushNotification.init({
            ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
            }
          });
          alert('初始化成功')
          this.iosRegistration()
      },
      onDeviceReady3(){
        push = PushNotification.init({
            ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
            }
          });
          alert('初始化成功')
          push.unregister(
            () => {
            //   console.log('success');
              this.device_token = "";
              this.registrationType = "";
              alert('id已清空')

            },
            () => {
              console.log('error');
              alert('取消失败')

            }
          );
      },
      iosRegistration(){ //注冊id
        push.on('registration', async data => {
            this.device_token = data.registrationId;
            this.registrationType = data.registrationType;
            alert(data.registrationId);
            alert(data.registrationType);
        })
      },
      iosUnRegistration(){ // 取消注冊
        if(this.device_token){

            push.unregister(
                () => {
                //   console.log('success');
                  this.device_token = "";
                  this.registrationType = "";
                  alert('id已清空')

                },
                () => {
                  console.log('error');
                  alert('取消失败')

                }
              );
        }else{
          alert('没有id请先注册')

        }
      },
      iosWatchNotification(){
        push.on('notification', data => {
            console.log(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
          });
      },
      initAregistration(){
        document.addEventListener("deviceready", this.onDeviceReady2(), false);
      },
      initAunregistration(){
        document.addEventListener("deviceready", this.onDeviceReady3(), false);
      },
      async iosPushOther(title,body,device_token){ //給對方發送通知
        let data = Qs.stringify({  
                        'validate_only': true,
                      'title': title,
                      'body': body,
                      'device_token':device_token
                   });
        await axios.post(api.iosPush,data)
      }


    },
    watch:{
        async device_token(newVal){ // 当device_token 发生变化时，主动向服务器提交
            if(newVal){
                alert('可提交')
            }else {
              alert('id被清空')
            }
        }
    }
}