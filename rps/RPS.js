$(function(){
  //1 = rock   //2 = paper  //3 = scissor
  var playerWin = 0, comWin = 0, tie = 0, userInput = 0, announcer = "";

  $("#rock").click(function(){
    printWinner(result(userInput = 1));
  })

  $("#paper").click(function(){
    printWinner(result(userInput = 2));
  })

  $("#scissor").click(function(){
    printWinner(result(userInput = 3));
  })


  function compPick(){
    var compInput = Math.floor((Math.random() * 3) +1);
    return compInput;
  }

  // function shake(){
  //   var timer = 3;
  //   setTimeout(setTimeout(function(){
  //      $(".winner").text(timer.toString());
  //      timer--;
  //      console.log("in inner");
  //   },1000),3000)
  //   $("#playerContainer img").animate({
  //
  //     });
  //   };

  function printWinner(results) {
    var winner = results[0];
    switch (winner) {
      case "player":
      $(".PICK").text("");
      $(".results").text("Player won!");
      $("#playerWin").text(results[1]);
      $("#playerPick").attr("src",results[5])
      $("#compPick").attr("src",results[4])
      break;

      case "com":
      $(".PICK").text("");
      $(".results").text("Computer won!");
      $("#comWin").text(results[2]);
      $("#playerPick").attr("src",results[5])
      $("#compPick").attr("src",results[4])
      break;

      case "tie":
      $(".PICK").text("");
      $(".results").text("Tie!");
      $("#tie").text(results[3]);
      $("#playerPick").attr("src",results[5])
      $("#compPick").attr("src",results[4])
      break;
      default:

    }
  }

  function imgPick(input){
    switch (input) {
      case 1:
      return "rps/rock.png";
      break;

      case 2:
      return "rps/paper.jpg";
      break;

      case 3:
      return "rps/scissors.png";
      break;
      default:

    }
  }

  function result(userInput) {
    // body...
    var compInput = compPick();
    var playerImgSource = imgPick(userInput), compImgSource = imgPick(compInput);
    var results = []; //first is annoucer, second is player win, third is comp win, fourth is tie, fith is comp pick, sixth is player pick
    switch (userInput){
      case 1:
      if(compInput === 1){
        announcer = "tie";
        tie++;
      }
      else if(compInput === 2){
        announcer = "com";
        comWin++;
      }
      else if(compInput === 3){
        announcer = "player";
        playerWin++;
      }
      break;

      case 2:
      if(compInput === 1){
        announcer = "player";
        playerWin++;
      }
      else if(compInput === 2){
        announcer = "tie";
        tie++;
      }
      else if(compInput === 3){
        announcer = "com";
        comWin++;
      }
      break;

      case 3:
      if(compInput === 1){
        announcer = "com";
        comWin++;
      }
      else if(compInput === 2){
      announcer = "player";
      playerWin++;
      }
      else if(compInput === 3){
        announcer = "tie";
        tie++;
      }
      break;

      default:
    }
    return results=[announcer,playerWin,comWin,tie,compImgSource,playerImgSource];
  }

})
