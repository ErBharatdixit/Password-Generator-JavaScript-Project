let inputSlider = document.getElementById("inputSlider");
let sliiderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gbtn = document.getElementById("g-btn");
let copyButton = document.getElementById('copyButton');

sliiderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
sliiderValue.textContent = inputSlider.value;

});
gbtn.addEventListener('click',() =>{
      passBox.value = generatePassword();

})
let lowerchars = "abcdefghijklmnopqrstuvwxyz"
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*";

function generatePassword(){
      let genPassword =" ";
      let allchars = "";
      allchars += lowercase.checked ? lowerchars:"";
      allchars += Uppercase.checked ? upperchars:"";
      allchars += numbers.checked ? allnumbers:"";
      allchars += symbols.checked ? allsymbols:"";

      if(allchars == "" || allchars.length == 0){
            return genPassword;
      }
      let i = 1;
      while(i<= inputSlider.value){
     genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
       i++;

      }
      

return genPassword
}

copyButton.addEventListener('click',()=>{
      if(passBox.value != "" || passBox.value.length>=1){
      navigator.clipboard.writeText(passBox.value);
            copyButton.innerText = 'copied';
      copyButton.title = "Password Copied";

      }
})

