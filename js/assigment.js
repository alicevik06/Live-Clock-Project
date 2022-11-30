let username = prompt("Adınız Nedir :");
let adi = document.querySelector(".adi");
adi.innerHTML = username;
    
var zaman;//saat değerimizi yükleyeceğimiz değişken.

function digitalsaat()
   {
      var anlikSaat = new Date();
      var saat = anlikSaat.getHours();
      var dakika = anlikSaat.getMinutes();
      var saniye = anlikSaat.getSeconds();
      zaman = `${saat} :  ${(dakika<10) ? '0' : ''} ${dakika} :  ${(saniye<10) ? '0' : ''} ${saniye} `;
      document.querySelector(".clock").innerHTML = zaman;
      setTimeout("digitalsaat()", 1000); // 1 saniyede bir güncelle
   }
   digitalsaat();