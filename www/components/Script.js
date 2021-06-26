// This is a JavaScript file

$(document).on("click", "#btn", function(){
  function resposta(buttonIndex){
    if(buttonIndex == 1){
      //Verdade
      navigator.notification.confirm("Elas atacam animais velhos, ou doentes, que vêm para beber no rio. Quando uma vaca abaixa a cabeça, elas agarram sua face. Se a vaca estiver muito fraca para lutar e se afastar, as piranhas irão arrastá-la para dentro da água e devorá-la.", confirmCallback, "Verdade", "Próximo");
        navigator.notification.beep(1);
    }else{
      //Mito
      navigator.notification.alert("Você errou! As piranhas são animais doídos... Tente de novo.", alertCallback, "Vish", "Sair");
        navigator.vibrate([200, 40, 600]);
    }
  }
  function confirmCallback(buttonIndex) {}
  function alertCallback() {}
  navigator.notification.confirm("Esse animal já foi astro de cinema, com um filme todo seu. A Piranha, tem fama de devoradora. É verdade ou é apenas mito que um cardume de piranhas pode devorar uma vaca em poucos minutos?", resposta, "1)Piranhas", ["VERDADE", "MITO"]);
});

$(document).on("click", "#btn2", function(){
  function resposta(buttonIndex){
    if(buttonIndex == 1){
      //Verdade
      navigator.notification.alert("Você errou! Isso aqui não é desenho animado não... Tente de novo.", alertCallback, "Vish", "Sair");
        navigator.vibrate([200, 40, 600]);
    }else{
      //Mito
      navigator.notification.confirm("Se fizessem isso, morreriam sufocadas. Suas pernas são suficientemente grandes para essas aves se defenderem de quem as ataca - ou para fugirem correndo. Elas, na verdade, encostam o ouvido no chão para perceber a vibração do solo e aproximações.", confirmCallback, "Mito", "Próximo");
        navigator.notification.beep(1);
    }
  }
  function confirmCallback(buttonIndex) {}
  function alertCallback() {}
  navigator.notification.confirm("Ao se sentirem ameaçados, os avestruzes tratam rapidamente de enfiar a cabeça no chão. Verdade ou Mito?", resposta, "2)Avestruzes", ["VERDADE", "MITO"]);
});

$(document).on("click", "#btn3", function(){
  function resposta(buttonIndex){
    if(buttonIndex == 1){
      //Verdade
      navigator.notification.alert("Você errou! Os burros podem aprender matemática? Enfim, tente de novo.", alertCallback, "Vish", "Sair");
        navigator.vibrate([200, 40, 600]);
    }else{
      //Mito
      navigator.notification.confirm("Muito pelo contrário, eles são considerados até mais inteligentes que os cavalos e são cheios de personalidade. É muito provável que a fama do burro venha do seu hábito de empacar, o que pode ser considerada uma atitude sábia.", confirmCallback, "Mito", "Próximo");
        navigator.notification.beep(1);
    }
  }
  function confirmCallback(buttonIndex) {}
  function alertCallback() {}
  navigator.notification.confirm("Os burros são os animais com menor inteligencia no reino animal?", resposta, "3)Burros", ["VERDADE", "MITO"]);
});

$(document).on("click", "#btn4", function(){
  function resposta(buttonIndex){
    if(buttonIndex == 1){
      //Verdade
      navigator.notification.alert('Você errou! "Eu não matei meu marido!", disse a Dona Aranha no tribunal...\nTente de novo.', alertCallback, "Vish", "Sair");
        navigator.vibrate([200, 40, 600]);
    }else{
      //Mito
      navigator.notification.confirm("As aranhas viúvas negras (Latrodectus) são chamadas assim porque o macho após a cópula, acabam por perder o bulbo copulador morrendo em seguida, aparentando parecer que a fêmea o mata.", confirmCallback, "Mito", "Próximo");
        navigator.notification.beep(1);
    }
  }
  function confirmCallback(buttonIndex) {}
  function alertCallback() {}
  navigator.notification.confirm("Após a cópula (e consequente procriação) a aranha Viuva-negra, altamente venenosa, acaba por matar o seu macho. Mito ou Verdade?", resposta, "4)Viuva-negra", ["VERDADE", "MITO"]);
});

$(document).on("click", "#btn5", function(){
  function resposta(buttonIndex){
    if(buttonIndex == 1){
      //Verdade
      navigator.notification.confirm("Apesar do tamanho, o pescoço de uma girafa tem apenas sete ossos, o mesmo número de ossos do pescoço de um homem. A cabeça da girafa fica a mais de dois metros de distância do coração. Para fazer o sangue subir, o coração é 43 vezes maior que do homem.", confirmCallback, "Verdade", "Próximo");
        navigator.notification.beep(1);
    }else{
      //Mito
      navigator.notification.alert('Você errou! O que mais chama a atenção nela é seu pescoço. Ele tem 2,4 metros de comprimento (a altura de alguns jogadores de basquete)... Enfim, tente de novo.', alertCallback, "Vish", "Sair");
        navigator.vibrate([200, 40, 600]);
    }
  }
  function confirmCallback(buttonIndex) {}
  function alertCallback() {}
  navigator.notification.confirm("O pescoço da girafa tem o mesmo numero de ossos que o pescoço de um ser humano. Mito ou Verdade?", resposta, "5)Girafas", ["VERDADE","MITO"]);
});