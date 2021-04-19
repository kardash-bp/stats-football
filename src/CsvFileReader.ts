import fs from 'fs'
import { strToDate } from './utils'
import { MatchResult } from './MatchResult'
//*tuple - strict array
type MatchData = [Date, string, string, number, number, MatchResult, string]
export class CsvFileReader {
  data: MatchData[] = []
  constructor(public filename: string) {}
  read() {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (row: string[]): MatchData => {
          return [
            strToDate(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5] as MatchResult,
            row[6],
          ]
        }
      )
  }
}
