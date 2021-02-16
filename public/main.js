function main() {
  const teamOneNameElement = document.querySelector('.team1 h2')

  function handleTeamOneInputField(event) {
    const teamOneTitleDisplay = event.target
    const teamOneInputFieldValue = teamOneTitleDisplay.value

    teamOneNameElement.textContent = teamOneInputFieldValue
  }

  const teamOneInput = document.querySelector('.team1 input')

  teamOneInput.addEventListener('input', handleTeamOneInputField)

  const teamTwoNameElement = document.querySelector('.team2 h2')

  function handleTeamTwoInputField(event) {
    const teamTwoTitleDisplay = event.target
    const teamTwoInputFieldValue = teamTwoTitleDisplay.value

    teamTwoNameElement.textContent = teamTwoInputFieldValue
  }

  const teamTwoInput = document.querySelector('.team2 input')

  teamTwoInput.addEventListener('input', handleTeamTwoInputField)
}

document.addEventListener('DOMContentLoaded', main)
