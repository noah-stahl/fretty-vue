import { describe, it } from 'vitest'

import { ALL_NATURAL_NOTES, ALL_NOTES } from '../constants/notes'
import { ALL_NATURAL_PITCH_CLASSES, ALL_PITCH_CLASSES } from '../constants/pitchClasses'
import { randomNote, randomPitchClass } from './randomizer'

describe.concurrent('randomPitchClass', () => {
  it('returns random natural pitch class by default', ({ expect }) => {
    ;[...Array(1000)].forEach(() => {
      const note = randomPitchClass()
      expect(ALL_NATURAL_PITCH_CLASSES).toContain(note)
    })
  })
  it('returns with accidentals if option is passed', ({ expect }) => {
    ;[...Array(1000)].forEach(() => {
      const note = randomPitchClass({ onlyNatural: false })
      expect(ALL_PITCH_CLASSES).toContain(note)
    })
  })
})

describe.concurrent('randomNote', () => {
  it('returns random natural note by default', ({ expect }) => {
    ;[...Array(1000)].forEach(() => {
      const note = randomNote()
      expect(ALL_NATURAL_NOTES).toContain(note)
    })
  })
  it('returns with accidentals if option is passed', ({ expect }) => {
    ;[...Array(1000)].forEach(() => {
      const note = randomNote({ onlyNatural: false })
      expect(ALL_NOTES).toContain(note)
    })
  })
})
