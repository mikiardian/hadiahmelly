const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "sayang bgttt poko na mahh",
    "aku sayang bgttt sama kamu",
    "love uu sayangkuu cantikkuu cintakku",
    "mwah mwahh",
    "i love uuuu",
    "akuu nggamau kehilangann kamuuuuuu",
    "aku gamauu kamuu pergiiiii",
    "plsss stayy with me okaayy?",
    "gapernahh se nyamann ini sama ceweeeee",
    "aku bakall tetep sabar dengan semuaa mood kamuu yg berubahhh",
    "makasiii udah sama akuu yaaaa",
    "aaaa sayangggg bgtttt",
    "kamuu nggaaa sendiriii, adaa akuu disiniii. Walaupun jarak nya jauhh, tp aku bakal selalu adaa buat kamuuu",
    "bakal selaluuu sayanggggg ke kamu",
    "makasiii yaaa udahhh selaluu nemenin akuu",
    "makasiii udahh mauu nerimaaa akuu yg ngeyel, imut, nan menggemaskan ini heheheee",
    "akuu ngerasaaa bahagiaa bgttt selama sama kamu inii",
    "kamuu gemess bgttt, lucuuu, cakepp, pinterr lagiii",
    "akuuu bakall berusaha buat jadi cowo yg terbaikkk, mau aku buktiin ke kamu",
    "tetep jadi pacarkuu sayangku cintakku yang aku kenal yaaaa",
    "akuuu bakal adaaa setiap kamu membutuhkann",
    "rasanyaa senengg bgttt tiapp denger suara kamuu, makasii udah nyempetin buat telpp",
    "akuuu gamauu kamuuu di deketin cowo lainnnnnn",
    "maafinn sama sifatkuu yang cemburuann ini yaa sayangggg",
    "akuuu skrngg selaluu ngerasaaa senengg, bisa ketawa ketawaa",
    "pokonyaa lovee bgtt sayangg, aku sayangg bgtt sama kamuuuu sayangkuu cintakku cantikkuuuuuu",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})