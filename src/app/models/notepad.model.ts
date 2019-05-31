import { Note } from '../models/note.model';

export interface Notepad {
    id: number;
    title: string;
    notes: Note[];
}
