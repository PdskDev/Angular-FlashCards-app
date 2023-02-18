import { Component, ViewChild, EventEmitter, Input } from "@angular/core";
import { IFlash } from "./models/flash.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("myFlashForm", { static: true }) flashForm: NgForm;

  title = "Flashcards";

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

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.getFlashById(id);
    flash.show = !flash.show;
  }

  editing = false;
  editingId: number;

  handleDelete(id: number) {
    const flashIndexToDelete = this.flashs.indexOf(this.getFlashById(id));
    this.flashs.splice(flashIndexToDelete, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;

    console.log("Hello");

    const flashCardToEdit = this.getFlashById(id);
    this.flash.question = flashCardToEdit.question;
    this.flash.answer = flashCardToEdit.answer;
  }

  handleUpdate() {
    const flashCardToUpdate = this.getFlashById(this.editingId);
    flashCardToUpdate.question = this.flash.question;
    flashCardToUpdate.answer = this.flash.answer;
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleRememberedChange({ id, flag }) {
    const flash = this.getFlashById(id);
    flash.remembered = flag;
  }

  handleSubmit(): void {
    this.flashs.push({
      id: getRandomNumber(),
      ...this.flash,
    });
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: "",
      answer: "",
    };
    this.flashForm.reset();
  }

  getFlashById(id: number): IFlash {
    return this.flashs.find((flash) => flash.id === id);
  }
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 100000);
}
