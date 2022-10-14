const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = '';
  if (Array.isArray(members)) {
  for (let i = 0; i<members.length; i++){
    if (typeof members[i] !== 'string') continue;
    if (typeof members[i] === null) continue;
    let first = members[i];
    for (let j = 0; j<members[i].length; j++){
      if (typeof members[i][j] === null) continue;
      if (members[i][j] === ' ') continue;
      let firstA = first[j];
      name += firstA;
      break;
  }
  }}
  if (typeof name !== 'string') return false;
  if (typeof name === null) return false;
  return name.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
