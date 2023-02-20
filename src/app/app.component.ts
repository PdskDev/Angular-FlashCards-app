import { Component, ViewChild, EventEmitter, Input } from "@angular/core";
import { IFlash } from "./models/flash.model";
import { NgForm } from "@angular/forms";
import { FlashService } from "./service/flash.service";

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

  flashs: IFlash[];

  constructor(private flashService: FlashService) {
    this.flashs = this.flashService.flashs;
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: "",
      answer: "",
    };
    this.flashForm.reset();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  }

  editing = false;
  editingId: number;

  handleEdit(id: number) {
    this.flash = this.flashService.getFlashById(id);
    this.editing = true;
    this.editingId = id;
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  getFlashById(id: number): IFlash {
    return this.flashs.find((flash) => flash.id === id);
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleRememberedChange({ id, flag }) {
    this.flashService.rememberedChange(id, flag);
  }
}
