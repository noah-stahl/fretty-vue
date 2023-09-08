import { Howl } from 'howler'
import { type PitchClass } from './PitchClass'

export type Note = {
  pitchClass: PitchClass;
  name: string;
  sound: Howl;
};
