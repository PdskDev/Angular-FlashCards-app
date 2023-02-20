import { Injectable } from "@angular/core";
import { IFlash } from "../models/flash.model";

function getRandomNumber(): number {
  return Math.floor(Math.random() * 100000);
}

@Injectable({
  providedIn: "root",
})
export class FlashService {
  constructor() {}

  flash = {
    question: "",
    answer: "",
  };

  flashs: IFlash[] = [
    {
      question: "Question 1",
      answer: "Answer 1",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 2",
      answer: "Answer 2",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 3",
      answer: "Answer 3",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 4",
      answer: "Answer 4",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 5",
      answer: "Answer 5",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 6",
      answer: "Answer 6",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 7",
      answer: "Answer 7",
      show: false,
      id: getRandomNumber(),
    },
    {
      question: "Question 8",
      answer: "Answer 8",
      show: false,
      id: getRandomNumber(),
    },
  ];

  getFlashById(id: number): IFlash {
    return this.flashs.find((flash) => flash.id === id);
  }

  toggleFlash(id: number) {
    const flash = this.getFlashById(id);
    flash.show = !flash.show;
  }

  addFlash(flash: IFlash) {
    this.flashs.push({
      ...flash,
      show: false,
      id: getRandomNumber(),
    });
  }

  deleteFlash(id: number) {
    const flashIndexToDelete = this.flashs.indexOf(this.getFlashById(id));
    this.flashs.splice(flashIndexToDelete, 1);
  }

  rememberedChange(id: number, flag: any) {
    const flash = this.getFlashById(id);
    flash.remembered = flag;
  }

  handleEdit(id: number) {
    const flashCardToEdit = this.getFlashById(id);
    this.flash.question = flashCardToEdit.question;
    this.flash.answer = flashCardToEdit.answer;
  }

  updateFlash(id: number, updatedFlash: IFlash) {
    const flashCardToUpdate = this.getFlashById(id);
    flashCardToUpdate.question = updatedFlash.question;
    flashCardToUpdate.answer = updatedFlash.answer;
  }
}
