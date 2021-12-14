//creo i due array
const arrayTitle=['Il testamento di Tito','Per fortuna','Cohiba','Il conformista'];
const arrayPar=[
    "Non avrai altro dio, all'infuori di me, spesso mi ha fatto pensare, genti diverse venute dall'est, dicevan che in fondo era uguale,credevano a un altro diverso da te, ma non mi hanno fatto del male",
    "Ah che bello domani mi sveglio e mi taglio le vene, molto meglio per tutti, io mi levo il pensiero e anche all'INPS, gli conviene... Nella tomba mi porto l'iphone e l'ipad, se vi serve qualcosa mandate un whatsapp, giocherò a candy crush, se ogni tanto vi va, è ben accetta una vita",
    "L'America ci guarda, non proprio con affetto, apparantemente placida ci osserva, ma infondo io sospetto, che l'America ha paura, altrimenti non si spiega come faccia, a vedere in uno stato in miniatura, questa orribile minaccia",
    "Il conformista, è uno che di solito sta sempre dalla parte giusta e a tutte le risposte chiare dentro la sua testa. E se ha voglia di pensare, parla per sentito dire, da buon opportunista, si adegua senza farci caso, e vive nel suo paradiso."
]
const arrayImg=[
    "url('https://www.repstatic.it/content/nazionale/img/2021/07/17/192948610-0e28f8f4-fca7-42c4-ae57-87818d8eac75.jpg')",
    "url('https://concertionline.com/wp-content/uploads/2018/01/Mirkoeilcane-Roma-05-01-18-7.jpg')",
    "url('https://www.insidemusic.it/wp-content/uploads/2017/06/Daniele-Silvestri_copertina.jpg')",
    "url('https://www.donnaglamour.it/wp-content/uploads/2019/06/IN_Giorgio_Gaber-1200x800.jpg')"
]
let currentIndex=0;

const boxTitle=document.getElementById("titolo")
boxTitle.innerHTML=arrayTitle[currentIndex];
const boxPar=document.getElementById("testo");
boxPar.innerHTML=arrayPar[currentIndex];
const boxImg=document.getElementById("slider-box");
boxImg.style.backgroundImage=arrayImg[currentIndex];
const buttonElement=document.querySelector(".fa-arrow-right");
buttonElement.addEventListener('click',function(){
    currentIndex++;
    if (currentIndex >= arrayTitle.length && currentIndex >= arrayPar.length && currentIndex >= arrayImg.length) {
        currentIndex=0;
    }
    boxTitle.innerHTML=arrayTitle[currentIndex];
    boxPar.innerHTML=arrayPar[currentIndex];
    boxImg.style.backgroundImage=arrayImg[currentIndex];
})
const ButtonDown=document.querySelector(".fa-arrow-left");
ButtonDown.addEventListener('click',function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex=arrayTitle.length-1;
        currentIndex=arrayPar.length-1;
        currentIndex=arrayImg.length-1;
        boxTitle.innerHTML=arrayTitle[currentIndex];
        boxPar.innerHTML=arrayPar[currentIndex];
        boxImg.style.backgroundImage=arrayImg[currentIndex];
    }
    boxTitle.innerHTML=arrayTitle[currentIndex];
    boxPar.innerHTML=arrayPar[currentIndex];
    boxImg.style.backgroundImage=arrayImg[currentIndex];
});