// ios的推送事件
// 不需要将init()与push事件分开，每次动作前先初始化，并不会影响结果
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
      iosWatchNotification(){
        document.addEventListener("deviceready", ()=>{
          push = PushNotification.init({
            ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
            }
          });
          alert('初始化成功')
          push.on('notification', data => {
            alert(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
          });
          alert('监听成功')
        }, false);
        
      },
      iosRegistration(){
        document.addEventListener("deviceready", ()=>{
          push = PushNotification.init({
            ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
            }
          });
          alert('初始化成功')
          push.on('registration', async data => {
              this.device_token = data.registrationId;
              this.registrationType = data.registrationType;
              alert(data.registrationId);
              alert(data.registrationType);
          })
        }, false);
      },
      iosUnRegistration(){
        document.addEventListener("deviceready", ()=>{
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
        }, false);
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