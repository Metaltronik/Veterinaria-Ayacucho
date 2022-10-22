const btnEnviar = document.getElementById('btnEnviar');
btnEnviar?.addEventListener("click", captcha);
let datoStringCaptcha;

function captcha() {
 
//const input = (<HTMLInputElement>document.getElementById('captchaimput')).value; 
//const captchaimputvalue = input;
const input = document.getElementById("captchaimput") ;
const captchaimputvalue = input?.value;
console.log(captchaimputvalue) // 👉️ "Initial value"

    

   if (captchaimputvalue == datoStringCaptcha)
   {
    alert ("su mensaje fue enviado");
    console. log ("el valor 1 en la función captcha es:" + captchaimputvalue);
    console.log ("el datostringcaptcha en la función cpatcha es: " + datoStringCaptcha);
   }
   else{
    console. log ("el valor 1 en la función captcha es:" + captchaimputvalue);
    console.log ("el datostringcaptcha en la funcion captcha es: " + datoStringCaptcha);
    console. log ("el valor 1 el tipo es :" + typeof captchaimputvalue);
    console.log ("el datostringcaptcha el tipo es : " + typeof datoStringCaptcha);
    let randomStringContainer = document.getElementById("id01"); 
    randomStringContainer.innerHTML =  generateRandomString(8);  
    alert ("Vuelva a intentarlo");
   
   }
    
}


const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("el result1 en generaterandomstring es:" + result1);
 datoStringCaptcha = result1;

    return result1;
    
}


 let randomStringContainer = document.getElementById("id01"); 
    randomStringContainer.innerHTML =  generateRandomString(8);    
   console.log("el datoStringCaotcha en post generaterandomstring es: " + datoStringCaptcha );

   //Events to delete the default values of the form

   document.getElementById("nombreFormID").addEventListener("click", () => {

      document.getElementById("nombreFormID").value = "";
   });
    document.getElementById("apellidoFormID").addEventListener("click", () => {
 
       document.getElementById("apellidoFormID").value = "";
      });
     document.getElementById("emailFormID").addEventListener("click", () => {
  
        document.getElementById("emailFormID").value = "";
      });

      document.getElementById("telefonoFormID").addEventListener("click", () => {
         document.getElementById("telefonoFormID").value = "";
      });

      document.getElementById("empresaFormID").addEventListener("click", () => {
         document.getElementById("empresaFormID").value = "";
      });
      document.getElementById("cuitFormID").addEventListener("click", () => {
         document.getElementById("cuitFormID").value = "";
      });
      document.getElementById("rubroFormID").addEventListener("click", () => {
         document.getElementById("rubroFormID").value = "";
      });
      document.getElementById("NumeroDeEmpleadosFormID").addEventListener("click", () => {
         document.getElementById("NumeroDeEmpleadosFormID").value = "";
      });
      document.getElementById("ProvinciaFormID").addEventListener("click", () => {
         document.getElementById("ProvinciaFormID").value = "";
      });
      document.getElementById("mensajeFormID").addEventListener("click", () => {
         document.getElementById("mensajeFormID").value = "";
      });