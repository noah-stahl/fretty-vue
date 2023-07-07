import { GuitarString } from './GuitarString'
import type { Note } from './Note'

export type Fret = {
  guitarString: GuitarString;
  fretNumber: number;
  note: Note;
}
