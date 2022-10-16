function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = ((2 ** disksNumber) - 1);
  let seconds = Math.floor(turns * 3600 / turnsSpeed);
  let object = {turns: turns, seconds: seconds}
  return object;
}

calculateHanoi(5, 4074);