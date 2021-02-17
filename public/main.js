let teamTwoScore = 0
let teamOneScore = 0

function handleTeamOneInputField(event) {
  const teamOneTitleDisplay = event.target
  const teamOneInputFieldValue = teamOneTitleDisplay.value

  document.querySelector('.team1 h2').textContent = teamOneInputFieldValue
}

function handleTeamTwoInputField(event) {
  const teamTwoTitleDisplay = event.target
  const teamTwoInputFieldValue = teamTwoTitleDisplay.value

  document.querySelector('.team2 h2').textContent = teamTwoInputFieldValue
}

// Player One Score
function teamOnePlus(event) {
  teamOneScore++
  document.querySelector('.team1 h3').textContent = teamOneScore
}

// Player Two Score
function teamTwoPlus(event) {
  teamTwoScore++
  document.querySelector('.team2 h3').textContent = teamTwoScore
}

function teamTwoSub(event) {
  teamTwoScore--
  document.querySelector('.team2 h3').textContent = teamTwoScore
}

function main() {
  const teamTwoInput = document.querySelector('.team2 input')
  teamTwoInput.addEventListener('input', handleTeamTwoInputField)

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleTeamOneInputField)

  const teamOneScoreHeader = document.querySelector('#teamOneAdd')
  teamOneScoreHeader.addEventListener('click', teamOnePlus)

  document.querySelector('#teamTwoAdd').addEventListener('click', teamTwoPlus)

  const teamTwoScoreHeader = document.querySelector('#teamTwoSub')
  teamTwoScoreHeader.addEventListener('click', teamTwoSub)
}

document.addEventListener('DOMContentLoaded', main)
