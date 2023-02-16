import { Component, ViewChild } from "@angular/core";
import { IFlash } from "./models/flash.model";
import { NgForm } from "@angular/forms";
import { FlashComponent } from "./flash/flash.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("flashForm", { static: true }) flashForm: NgForm;
  editing = false;
  editingId;

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

  handleDelete(id: number) {
    const flashIndex = this.flashs.indexOf(this.getFlashById(id));
    this.flashs.splice(flashIndex, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;

    const flash = this.getFlashById(this.editingId);
    this.flash.question = flash.question;
    this.flash.answer = flash.answer;
  }

  handleUpdate() {
    const flash = this.getFlashById(this.editingId);
    this.flash.question = this.flash.question;
    this.flash.answer = this.flash.answer;
    this.handleCancel();
  }

  handleCancel() {
    (this.editing = false), (this.editingId = undefined), this.handleClear();
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
    return this.flashs.find((flash) => flash.id == id);
  }
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 100000);
}
