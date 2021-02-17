function main() {
  const teamOneNameElement = document.querySelector('.team1 h2')

  function handleTeamOneInputField(event) {
    const teamOneTitleDisplay = event.target
    const teamOneInputFieldValue = teamOneTitleDisplay.value

    teamOneNameElement.textContent = teamOneInputFieldValue
  }

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleTeamOneInputField)

  // Player One Score

  function teamOnePlus(event) {
    let teamOneScore = 0
    teamOneScore++
    document.querySelector('.team1 h3').textContent = teamOneScore
  }

  const teamOneScoreHeader = document.querySelector('#teamOneAdd')
  teamOneScoreHeader.addEventListener('click', teamOnePlus)

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const teamTwoNameElement = document.querySelector('.team2 h2')

  function handleTeamTwoInputField(event) {
    const teamTwoTitleDisplay = event.target
    const teamTwoInputFieldValue = teamTwoTitleDisplay.value

    teamTwoNameElement.textContent = teamTwoInputFieldValue
  }

  const teamTwoInput = document.querySelector('.team2 input')

  teamTwoInput.addEventListener('input', handleTeamTwoInputField)

  // Player Two Score

  function teamTwoPlus(event) {
    let teamTwoScore = 0
    teamTwoScore++
    document.querySelector('.team2 h3').textContent = teamTwoScore
  }

  const teamTwoScoreHeader = document.querySelector('#teamTwoAdd')
  teamTwoScoreHeader.addEventListener('click', teamTwoPlus)

  // function teamTwoSub(event) {
  //   let teamTwoScore = 0
  //   teamTwoScore--
  //   document.querySelector('.team2 h3').textContent = teamTwoScore
  // }

  // const teamTwoScoreHeader = document.querySelector('#teamTwoSub')
  // teamTwoScoreHeader.addEventListener('click', teamTwoSub)
}

document.addEventListener('DOMContentLoaded', main)
