import { type Color } from 'chroma-js'

export enum Tone {
  A = 'A',
  ASharp = 'A#',
  B = 'B',
  C = 'C',
  CSharp = 'C#',
  D = 'D',
  DSharp = 'D#',
  E = 'E',
  F = 'F',
  FSharp = 'F#',
  G = 'G',
  GSharp = 'G#'
}

export interface PitchClass {
  tone: Tone
  color: Color
}
