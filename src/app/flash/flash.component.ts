import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IFlash } from "../models/flash.model";

@Component({
  selector: "app-flash",
  templateUrl: "./flash.component.html",
  styleUrls: ["./flash.component.css"],
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash = {
    id: 1,
    question: "React to Angular",
    answer: "No Reaction :)",
    show: false,
  };

  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() OnEdit = new EventEmitter();
  @Output() OnRememberedChange = new EventEmitter();

  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }

  deleteFlash() {
    this.onDelete.emit(this.flash.id);
  }

  editFlash() {
    this.OnEdit.emit(this.flash.id);
  }

  markCorrect() {
    this.OnRememberedChange.emit({
      id: this.flash.id,
      flag: "correct",
    });
  }

  markIncorrect() {
    this.OnRememberedChange.emit({
      id: this.flash.id,
      flag: "incorrect",
    });
  }

  constructor() {}

  ngOnInit() {}
}
