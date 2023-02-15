import { Component } from "@angular/core";
import { IFlash } from "./models/flash.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Flashcards";

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

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find((flash) => flash.id == id);
    flash.show = !flash.show;
  }
}
function getRandomNumber(): number {
  return Math.floor(Math.random() * 100000);
}
