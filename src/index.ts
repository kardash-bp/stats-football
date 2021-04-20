import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
const matches = new MatchReader('football.csv')
matches.read()
let manWins = 0

for (let match of matches.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manWins++
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manWins++
  }
}
console.log(`Man Utd won ${manWins} games.`)
