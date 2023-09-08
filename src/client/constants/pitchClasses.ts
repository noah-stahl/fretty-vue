import chroma from 'chroma-js'
import { type PitchClass, Tone } from '../types/PitchClass'

export const A: PitchClass = {
  tone: Tone.A,
  color: chroma('#e6194B')
}
export const ASharp: PitchClass = {
  tone: Tone.ASharp,
  color: chroma('#ff7ed4')
} 
export const B: PitchClass = {
  tone: Tone.B,
  color: chroma('#f58231')
} 
export const C: PitchClass = {
  tone: Tone.C,
  color: chroma('#ffe119')
} 
export const CSharp: PitchClass = {
  tone: Tone.CSharp,
  color: chroma('#fffac8')
} 
export const D: PitchClass = {
  tone: Tone.D,
  color: chroma('#5ec55c')
} 
export const DSharp: PitchClass = {
  tone: Tone.DSharp,
  color: chroma('#bfef45')
} 
export const E: PitchClass = {
  tone: Tone.E,
  color: chroma('#aaffc3')
} 
export const F: PitchClass = {
  tone: Tone.F,
  color: chroma('#4363d8')
} 
export const FSharp: PitchClass = {
  tone: Tone.FSharp,
  color: chroma('#42d4f4')
} 
export const G: PitchClass = {
  tone: Tone.G,
  color: chroma('#d65eee')
} 
export const GSharp: PitchClass = {
  tone: Tone.GSharp,
  color: chroma('#dcbeff')
}  

export const ALL_PITCH_CLASSES = [
  A, ASharp, B, C, CSharp, D, DSharp, E, F, FSharp, G, GSharp
]

export const ALL_NATURAL_PITCH_CLASSES = [
  A, B, C, D, E, F, G
]
