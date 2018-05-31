import { Injectable } from "@angular/core";
import { WORDS } from "../mock data/mock-words";
import { Word } from "../models/word";

@Injectable()
export class WordService {

  private words: Array<Word>;

  constructor() {
    this.words = WORDS;
  }

  getAll() {
    return this.words;
  }

}
