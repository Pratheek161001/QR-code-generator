// might need variables

const enteredText = document.getElementById('qr-text');
const enteredSize = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = enteredSize.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

enteredSize.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
})

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img!==null){
        let imgAtrr=img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAtrr);
    }
    else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
    }

})

function isEmptyInput (){
    if(enteredText.value.length>0){
        generateQRCode();
    }
    else{
        alert("The input section is blank...please fill it and try again")
    }
}

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