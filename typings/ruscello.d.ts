/// <reference path='keymirror.d.ts' />
/// <reference path='tsd.d.ts' />

interface BookList { date: Dates; title: string; list: Book[]; }
interface Book { id: string; index: string; summary: string; }
interface Dates { prev: string; curr: string; next: string; }
interface Store { books: BookList[] }
