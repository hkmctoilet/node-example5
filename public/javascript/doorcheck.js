function doorcheck(){

  var config = {
    apiKey: "AIzaSyCAkId4s73nurOckfiANF0jpsCyfAwNH7U",
    authDomain: "htoilet-1c9d9.firebaseapp.com",
    databaseURL: "https://htoilet-1c9d9.firebaseio.com",
    projectId: "htoilet-1c9d9",
    storageBucket: "htoilet-1c9d9.appspot.com",
    messagingSenderId: "190112489710"
  };
  firebase.initializeApp(config);             //firebase È¯°æ ¼³Á¤
  
  var db = firebase.database();               //firebase DB ¿¬°á
  var ref = db.ref("device/yd14f/contact");   //"device/yd14f/contact"±îÁöÀÇ ·¹ÆÛ·±½º ¼³Á¤
  
  ref.on("value", gotData, errData);          //µ¥ÀÌÅÍ ÀÎÀÔ ½Ã ¸®½º³Ê ½ÇÇà
}

function gotData(data) {
  var status = data.val();                    //ÀÎÀÔµÈ µ¥ÀÌÅÍ(µé)ÀÇ °ª ÀúÀå - ¿©±â¼­´Â ±â±â ¸ñ·Ï
  var keys = Object.keys(status);             //±â±â ¸ñ·ÏµéÀÇ key(±â±â¹øÈ£) ÃßÃâ
  var room_number = new String();             //¹æ¹øÈ£ ÁöÁ¤À» À§ÇÑ º¯¼ö
  
  var toilet_gender = document.getElementById("toilet_gender").getAttribute("value"); //³²/³à ÆäÀÌÁö Áß ¾î¶² ÆäÀÌÁöÀÎÁö ´ëÁ¶ÇÏ±â À§ÇÑ º¯¼ö
  
  for (var i=0, sum=0; i<keys.length; i++) {         //È­Àå½Ç 12°÷
    var k = keys[i];                          //±â±â¹øÈ£ ÇÑ°³¾¿ ÃßÃâ
    var date = status[k].date;                //ÃÖÁ¾¾÷µ¥ÀÌÆ®½Ã°£
    var device = status[k].device;            //±â±â¹øÈ£
    var name = status[k].name;                //¼¾¼­Á¾·ù
    var value = status[k].value;              //¿­¸²/´ÝÈûÁ¤º¸
    

    var gender = device.substr(0,1);          //±â±âÁ¤º¸ÀÇ genderÁ¤º¸ ºÐ¸®
    var rnum = device.substr(6,1);            //±â±âÁ¤º¸ÀÇ ¹æ¹øÈ£ ºÐ¸®
    
    if (toilet_gender == gender) {            //ÇöÀç Ç¥ÃâÇÏ°íÀÚ ÇÏ´Â ÆäÀÌÁöÀÇ ¼ºº°À» ´ëÁ¶
    
      room_number = gender + "_room" + rnum;  //ÀçÁ¶¸³
      
      if(value == "closed")                   //´ÝÇôÀÖÀ¸¸é
        document.getElementById(room_number).style.background = "red";
        else document.getElementById(room_number).style.background = "green";

     if(value == "open"){
        sum++;
     }
       //추가한 부분
       
       //추가한 부분
    }
//추가한 부분

//추가한 부분 
  }
}

function errData(err) {
  console.log('error');
  console.log(err)
}

doorcheck();    //JSÆÄÀÏ ·Îµù ½Ã ½ÇÇà
