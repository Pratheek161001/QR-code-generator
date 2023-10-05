// might need variables

const enteredText = document.getElementById('qr-text');
const enteredSize = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = enteredSize.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateQRCode();
});

enteredSize.addEventListener("change",()=>{
    e.preventDefault();
    generateQRCode();
})

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:enteredText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}