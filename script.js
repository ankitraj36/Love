document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");
  
    const questions= [
      "Are you sure?",
      "Are you really sure??",
      "Are you really really sure???",
      "Think again Please?",
      "just give me a chance",
      "I love you so much please",
      "Don't believe in second chances?",
      "I'll be sad Babu😢",
      "I'll be more sad Meri Sona😢",
      "I'll be very sad Meri Jaan😢",
      "I'll be very very sad 😢",
      "Maybe we can talk about it?",
      "I am not going to ask again! 😡",
      "Ok now this is hurting my feelings! 😭",
      "You are now just being mean! 😭",
      "Why are you doing this to me? 😭",
      "Please give me a chance! 🙏",
      "Please Babu Meri Sona 🥰",
      "I'll be very Sad  na 😢",
      "Man Jao Na Babu Please Babu",
    ];
  
    let questionIndex = 0;
  
    yesButton.addEventListener ("click", function () {
      responseMessage.innerText = `😘💖,I Love youuuuu Sandeep Panigrahi Babu 😘😘 Meri sona❤️ Babu ${this.style.breakAfter}
      ❤💘😍🥰😘Meri Piyari Babuuuu🥰❤💘🧡🌹🌹`; 
      responseMessage.style.color = "#fff";
      noButton.style.display = "none";
    });
  
    noButton.addEventListener("click", function () {
      noButton.innerText = questions[questionIndex];
      questionIndex = (questionIndex + 1) % questions.length;
    });
  });