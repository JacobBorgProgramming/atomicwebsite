var a1           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;
   a1 += characters.charAt(Math.floor(Math.random() * charactersLength));

   var a2           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
      a2 += characters.charAt(Math.floor(Math.random() * charactersLength));
      var a3          = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
         a3 += characters.charAt(Math.floor(Math.random() * charactersLength));
         var a4           = '';
         var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
         var charactersLength = characters.length;
            a4 += characters.charAt(Math.floor(Math.random() * charactersLength));

            var a5           = '';
            var characters       = '1234567890';
            var charactersLength = characters.length;
               a5 += characters.charAt(Math.floor(Math.random() * charactersLength));var a6           = '';
               var characters       = '1234567890';
               var charactersLength = characters.length;
                  a6 += characters.charAt(Math.floor(Math.random() * charactersLength));


                  var a7           = '';
                  var characters       = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                  var charactersLength = characters.length;
                     a7 += characters.charAt(Math.floor(Math.random() * charactersLength));
                     var a8           = '';
                     var characters       = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&-[]()?!';
                     var charactersLength = characters.length;
                        a8 += characters.charAt(Math.floor(Math.random() * charactersLength));

var aa1 = Math.floor(Math.random() * 10);

var c1           = '';
var characters       = '[]()?!';
var charactersLength = characters.length;
   c1 += characters.charAt(Math.floor(Math.random() * charactersLength));

var c2           = '';
var characters       = '@#$%&-';
var charactersLength = characters.length;
   c2 += characters.charAt(Math.floor(Math.random() * charactersLength));

var c3           = '';
var characters       = '@#$%&-[]()?!';
var charactersLength = characters.length;
   c3 += characters.charAt(Math.floor(Math.random() * charactersLength));

var q6 = c2 + screen.availHeight+screen.availHeight * Math.floor(Math.random() * 11);
var ae5ID = 'AE'+c3+c1+c2+'5'+'--';
console.log(ae5ID);
var q8 = new Date();
var q9 = q8.getDate();
var q10 = q8.getMonth();
var q11 = q8.getFullYear();
var q12 = q8.getMinutes();
var q13 = q8.getSeconds();
var q14 = Math.floor(Math.random() * 180);



var result= a1+a5+a2+a6+a5+a3+a4+a8+a2+q9*q13;
console.log(result);

if (navigator.cookieEnabled === false){
  console.log('Cookies are disabled')
  document.getElementById("jsC1").innerHTML = (ae5ID+result);

}
if (navigator.cookieEnabled === true){
  document.getElementById("jsC1").innerHTML = (ae5ID+result);

  console.log('Cookies are enabled')
}
