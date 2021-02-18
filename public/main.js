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
  if (teamOneScore >= 21) {
    const wins = document.querySelector('.team1 h3').textContent
    window.alert(`${wins} WINNER!`)

    return
  }
  teamOneScore++
  document.querySelector('.team1 h3').textContent = teamOneScore
}

function teamOneSub(event) {
  if (teamOneScore <= 0) {
    return
  }
  teamOneScore--
  document.querySelector('.team1 h3').textContent = teamOneScore
}

// Player Two Score
function teamTwoPlus(event) {
  if (teamTwoScore >= 21) {
    const wins = document.querySelector('.team2 h3').textContent
    window.alert(`${wins} WINNER!`)

    return
  }
  teamTwoScore++
  document.querySelector('.team2 h3').textContent = teamTwoScore
}

function teamTwoSub(event) {
  if (teamTwoScore <= 0) {
    return
  }
  teamTwoScore--
  document.querySelector('.team2 h3').textContent = teamTwoScore
}

function reset(event) {
  document.querySelector('h3').textContent = 0
}

function main() {
  document
    .querySelector('.team2 input')
    .addEventListener('input', handleTeamTwoInputField)

  document
    .querySelector('.team1 input')
    .addEventListener('input', handleTeamOneInputField)

  document.querySelector('#teamOneAdd').addEventListener('click', teamOnePlus)

  document.querySelector('#teamTwoAdd').addEventListener('click', teamTwoPlus)

  document.querySelector('#teamTwoSub').addEventListener('click', teamTwoSub)

  document.querySelector('#teamOneSub').addEventListener('click', teamOneSub)

  document.querySelector('button').addEventListener('click', reset)
}

document.addEventListener('DOMContentLoaded', main)
