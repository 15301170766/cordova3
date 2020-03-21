// const base = 'http://182.61.19.160:7001';
// const base = 'http://192.168.1.100:7001';192.168.1.200:7001
// const cloud = "182.61.19.160:7001";
let cloud = "";
let apiBaseName=''; // 储存ip的localstorage
let fileName = '';  // 储存ip的文件名称
let localOptions = ''; // 登陆文件配置
if (process.env.VUE_APP_SHOW_DEV === 'yes') {
 cloud = "dev.skinreader.cn";
 apiBaseName = "apiBase2";
 fileName = "IPjson2.json";
 localOptions = "localOptionsTest";
}else{
 cloud = "dev.skinreader.cn";
 apiBaseName = "apiBase2Build";
  fileName = "IPjson2Build.json";
  localOptions = "localOptionsBuild";

}
let base = 'http://';
const aa=localStorage.getItem(apiBaseName)?localStorage.getItem(apiBaseName):cloud;
if(!localStorage.getItem(apiBaseName)){
  localStorage.setItem(apiBaseName,cloud)
}
if(aa !== cloud ){
  base = 'http://';
}
base += aa;
export default {
  localOptions,
  fileName,
  apiBaseName,
  cloud,
  base,
  knowledge:base+'/knowledge/dic.json',
  graphql:base + '/graphql',
  event: base + '/event',
  login: base + '/session',
  register: base + '/doctor',
  patient: base + '/patient',
  diagnoses: base + '/diagnoses',
  diagnosis: base + '/diagnosis',
  images: base + '/images',
  vcode: base + '/vcode',
  available: base + '/doctor/availability',
  doctor: base + '/doctor',
  notes: base + '/notes',
  patients:base + '/patients',
  skin_images_thumbnails:base + '/skin_images/thumbnails/',
  skin_images:base + '/skin_images/',
  doctor_images:base + '/doctor_images/',
  doctors:base + '/doctors',
  contactRequset:base + '/contact/request',//好友请求
  contactRequests:base + '/contact/requests',//好友请求列表
  contactResponse:base + '/contact/response',//好友请求回复
  messages:base + '/messages',//消息列表获取
  message:base + '/message',//删除消息
  contact:base + '/contact',//删除好友contacts
  contacts:base + '/contacts',//获取医生好友列表
  doctor_header:base + '/doctor_images/',//获取医生头像
  version: 'https://'+cloud + '/app/version.json',
  versionBuild: 'https://'+cloud + '/goto?target=',
  versionBuild2:'https://'+'skinreader.cn' + '/app/version.json',
  buildEnd: '&channel=app&activity=update',
  // version: 'https://'+cloud + '/app/version.json?'+new Date().getTime(),
  appUpload: 'https://'+cloud + '/app/',
  appUploadBuild: 'https://'+'skinreader.cn' + '/app/',
  // 聊天音频文件地址
  consultationAudios: base + '/consultation_audios/',
  // 诊疗录音地址
  diagnosisAudios: base + '/diagnosis_audios/',
  // 聊天消息大图地址
  consultationImages: base + '/consultation_images/',
  // 聊天消息缩略图地址
  consultationImagesThumbnails: base + '/consultation_images/thumbnails/',
  // 图片大图地址
  imageSrcPrefix: base + '/wxpatient_skin_images/',
  // 图片缩略图地址
    // 住院图片缩略图地址
    hospitalization_imagesThumbnails: base  + '/hospitalization_images/thumbnails/',
    // 住院图片大图地址
    hospitalization_images: base + '/hospitalization_images/',
  imageSrcPrefixThumbnails: base + '/wxpatient_skin_images/thumbnails/',
  doctorMsgImage:base + '/doctor_msg_images/',
  doctorMsgImageThumbnails:base + '/doctor_msg_images/thumbnails/',
  doctorMsgAudios:base + '/doctor_msg_audios/',
  // 美容图片路径
  cosmetology_images: base + '/cosmetology_images/',
  cosmetology_imagesThumbnails: base + '/cosmetology_images/thumbnails/',
  knowledgeDic: base +  '/knowledge/dic.json',
   // 医生自定义报告模板
   template: base + '/templates/',
   iosPush: base + '/iosPush',

}
// https://cloud.skinreader.cn/goto?target=https%3A%2F%2Fskinreader.cn%2Fapp%2Fskinreader.apk&channel=app&activity=update
// encodeURI
// https://cloud.skinreader.cn/goto?target=https%3A%2F%2Fskinreader.cn%2Fapp%2Fversion.json&channel=app&activity=update
