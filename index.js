
// This is Rules Pop Up part

document.querySelector(".btnRules").addEventListener("click", function () {

	rulesPopUp ();

});

document.querySelector(".btnIconClose").addEventListener("click", function () {

	rulesHidden ();

});

function rulesPopUp () {
	
	document.querySelector(".container-fluid").style.opacity = "0.97";
	document.querySelector(".rowPopUp").style.visibility = "visible";
}

function rulesHidden () {
	document.querySelector(".container-fluid").style.opacity = "1";
	document.querySelector(".rowPopUp").style.visibility = "hidden";
}

// This is Game played part

document.querySelector(".scoreResult").innerHTML = Number (sessionStorage.getItem('score'));

function gameStarted (playerChoice) {

	playerPicked (playerChoice);

	var randomNumber = Math.floor(Math.random()*3);

	if (randomNumber === 0) {
		var houseChoice = "paper";
		housePicked(houseChoice);
	} else if (randomNumber === 1) {
		var houseChoice = "scissors";
		housePicked(houseChoice);
	} else {
		var houseChoice = "rock";
		housePicked(houseChoice);
	}

	setTimeout( function () {gamePlayed (playerChoice, houseChoice)}, 2000);

	document.querySelector(".btnPlayAgain").addEventListener("click", function () {

		location.reload ();

});
}

function playerPicked (playerChoice) {

	switch (playerChoice) {
			case "paper":
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".playerRock").style.visibility = "hidden";	
				document.querySelector(".playerScissors").style.visibility = "hidden";	
				document.querySelector(".playerRock").style.display = "none";	
				document.querySelector(".playerScissors").style.display = "none";	
			break;

			case "scissors":
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".playerRock").style.visibility = "hidden";	
				document.querySelector(".playerPaper").style.visibility = "hidden";
				document.querySelector(".playerRock").style.display = "none";	
				document.querySelector(".playerPaper").style.display = "none";
			break;

			case "rock":
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".playerScissors").style.visibility = "hidden";	
				document.querySelector(".playerPaper").style.visibility = "hidden";
				document.querySelector(".playerScissors").style.display = "none";
				document.querySelector(".playerPaper").style.display = "none";
			break;

			default: console.log (key);
		}
}

function housePicked (key) {

	switch (key) {
			case "paper":
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".houseRock").style.visibility = "hidden";	
				document.querySelector(".houseScissors").style.visibility = "hidden";	
				document.querySelector(".houseRock").style.display = "none";	
				document.querySelector(".houseScissors").style.display = "none";	
			break;

			case "scissors":				
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".houseRock").style.visibility = "hidden";	
				document.querySelector(".housePaper").style.visibility = "hidden";
				document.querySelector(".houseRock").style.display = "none";	
				document.querySelector(".housePaper").style.display = "none";
			break;

			case "rock":
				document.querySelector(".gamePartDiv").setAttribute("style","height: 0px");
				document.querySelector(".gamePartDiv").style.display = "none";
				document.querySelector(".gamePartDiv").style.visibility = "hidden";
				document.querySelector(".playersShowChoices").setAttribute("style","height: 545px");
				document.querySelector(".playersShowChoices").style.visibility = "visible";
				document.querySelector(".playersShowChoices").style.display = "flex";
				document.querySelector(".houseScissors").style.visibility = "hidden";	
				document.querySelector(".housePaper").style.visibility = "hidden";
				document.querySelector(".houseScissors").style.display = "none";;	
				document.querySelector(".housePaper").style.display = "none";;
			break;

			default: console.log (key);
		}
}

function gamePlayed (playerChoice, houseChoice) {

	switch (playerChoice) {

			case "paper":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".playerRockGame").style.visibility = "hidden";	
				document.querySelector(".playerScissorsGame").style.visibility = "hidden";	
				document.querySelector(".playerRockGame").style.display = "none";	
				document.querySelector(".playerScissorsGame").style.display = "none";	
			break;

			case "scissors":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".playerRockGame").style.visibility = "hidden";	
				document.querySelector(".playerPaperGame").style.visibility = "hidden";
				document.querySelector(".playerRockGame").style.display = "none";	
				document.querySelector(".playerPaperGame").style.display = "none";
			break;

			case "rock":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".playerScissorsGame").style.visibility = "hidden";	
				document.querySelector(".playerPaperGame").style.visibility = "hidden";
				document.querySelector(".playerScissorsGame").style.display = "none";
				document.querySelector(".playerPaperGame").style.display = "none";
			break;

			default: console.log (key);
		}

	switch (houseChoice) {

			case "paper":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".houseRockGame").style.visibility = "hidden";	
				document.querySelector(".houseScissorsGame").style.visibility = "hidden";	
				document.querySelector(".houseRockGame").style.display = "none";	
				document.querySelector(".houseScissorsGame").style.display = "none";	
			break;

			case "scissors":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".houseRockGame").style.visibility = "hidden";	
				document.querySelector(".housePaperGame").style.visibility = "hidden";
				document.querySelector(".houseRockGame").style.display = "none";	
				document.querySelector(".housePaperGame").style.display = "none";
			break;

			case "rock":
				document.querySelector(".playersShowChoices").setAttribute("style","height: 0px");
				document.querySelector(".playersShowChoices").style.display = "none";
				document.querySelector(".playersShowChoices").style.visibility = "hidden";
				document.querySelector(".gameResult").setAttribute("style","height: 545px");
				document.querySelector(".gameResult").style.visibility = "visible";
				document.querySelector(".gameResult").style.display = "flex";
				document.querySelector(".houseScissorsGame").style.visibility = "hidden";	
				document.querySelector(".housePaperGame").style.visibility = "hidden";
				document.querySelector(".houseScissorsGame").style.display = "none";
				document.querySelector(".housePaperGame").style.display = "none";
			break;

			default: console.log (key);
		}	

	switch (playerChoice) {

			case "paper":
				if (houseChoice === "paper") {
					document.querySelector(".pShowGameResult").innerHTML = "DRAW";
				} else if (houseChoice === "scissors") {
					document.querySelector(".pShowGameResult").innerHTML = "YOU LOSE";
				} else {
					document.querySelector(".pShowGameResult").innerHTML = "YOU WIN";

					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');
				}

			break;

			case "scissors":
				if (houseChoice === "paper") {
					document.querySelector(".pShowGameResult").innerHTML = "YOU WIN";
					
					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');

				} else if (houseChoice === "scissors") {
					document.querySelector(".pShowGameResult").innerHTML = "DRAW";
				} else {
					document.querySelector(".pShowGameResult").innerHTML = "YOU LOSE";
				}

			break;

			case "rock":
				if (houseChoice === "paper") {
					document.querySelector(".pShowGameResult").innerHTML = "YOU LOSE";
				} else if (houseChoice === "scissors") {
					document.querySelector(".pShowGameResult").innerHTML = "YOU WIN";
					
					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');
					
				} else {
					document.querySelector(".pShowGameResult").innerHTML = "DRAW";
				}

			break;

			default: console.log (key);
		}
}

// MOBILE VERSION

function gameStartedMobile (playerChoice) {

	playerPickedMobile (playerChoice);

	var randomNumber = Math.floor(Math.random()*3);

	if (randomNumber === 0) {
		var houseChoice = "paperMobile";
		housePickedMobile(houseChoice);
	} else if (randomNumber === 1) {
		var houseChoice = "scissorsMobile";
		housePickedMobile(houseChoice);
	} else {
		var houseChoice = "rockMobile";
		housePickedMobile(houseChoice);
	}

	setTimeout( function () {gamePlayedMobile (playerChoice, houseChoice)}, 2000);

	// document.querySelector(".btnPlayAgainMobile").addEventListener("click", function () {

	// 	location.reload (index mobile.html);

}

function playerPickedMobile (playerChoice) {

	switch (playerChoice) {
			case "paperMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";

				document.querySelector(".playersShowChoicesMobile").style.display = "flex";
				document.querySelector(".playersShowChoicesMobile").style.visibility= "visible";

				document.querySelector(".playerRockMobile").style.display = "none";	
				document.querySelector(".playerScissorsMobile").style.display = "none";	
			break;

			case "scissorsMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";
				
				document.querySelector(".playersShowChoicesMobile").style.display = "flex";
				document.querySelector(".playersShowChoicesMobile").style.visibility= "visible";
				
				document.querySelector(".playerRockMobile").style.display = "none";	
				document.querySelector(".playerPaperMobile").style.display = "none";	
			break;

			case "rockMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";
				
				document.querySelector(".playersShowChoicesMobile").style.display = "flex";
				document.querySelector(".playersShowChoicesMobile").style.visibility= "visible";

				
				document.querySelector(".playerPaperMobile").style.display = "none";	
				document.querySelector(".playerScissorsMobile").style.display = "none";	
			break;

			default: console.log (key);
		}
}

function housePickedMobile (houseChoice) {

	switch (houseChoice) {
			case "paperMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";

				document.querySelector(".housePickedResultMobile").style.display = "flex";
				document.querySelector(".housePickedResultMobile").style.visibility= "visible";

				document.querySelector(".houseRockMobile").style.display = "none";	
				document.querySelector(".houseScissorsMobile").style.display = "none";	
			break;

			case "scissorsMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";
				
				document.querySelector(".housePickedResultMobile").style.display = "flex";
				document.querySelector(".housePickedResultMobile").style.visibility= "visible";
				
				document.querySelector(".houseRockMobile").style.display = "none";	
				document.querySelector(".housePaperMobile").style.display = "none";	
			break;

			case "rockMobile":
				document.querySelector(".bgTriangle2SvgMobile").style.display = "none";
				document.querySelector(".imageRules2SvgMobile").style.display = "none";
				
				document.querySelector(".housePickedResultMobile").style.display = "flex";
				document.querySelector(".housePickedResultMobile").style.visibility= "visible";

				
				document.querySelector(".housePaperMobile").style.display = "none";	
				document.querySelector(".houseScissorsMobile").style.display = "none";	
			break;

			default: console.log (key);
		}
}

function gamePlayedMobile (playerChoice, houseChoice) {

	switch (playerChoice) {

			case "paperMobile":
				if (houseChoice === "paperMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "DRAW";
				} else if (houseChoice === "scissorsMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU LOSE";
				} else {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU WIN";

					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');
				}

				document.querySelector(".btnPlayAgainMobile").style.display = "flex";

			break;

			case "scissorsMobile":
				if (houseChoice === "paperMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU WIN";
					
					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');

				} else if (houseChoice === "scissorsMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "DRAW";
				} else {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU LOSE";
				}

				document.querySelector(".btnPlayAgainMobile").style.display = "flex";

			break;

			case "rockMobile":
				if (houseChoice === "paperMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU LOSE";
				} else if (houseChoice === "scissorsMobile") {
					document.querySelector(".pShowGameResultMobile").innerHTML = "YOU WIN";
					
					var integer = Number (sessionStorage.getItem('score'));
					integer++;
					sessionStorage.setItem('score', integer);
					
					document.querySelector(".scoreResult").innerHTML = sessionStorage.getItem('score');
					
				} else {
					document.querySelector(".pShowGameResultMobile").innerHTML = "DRAW";
				}

				document.querySelector(".btnPlayAgainMobile").style.display = "flex";

			break;

			default: console.log (key);
		}
}