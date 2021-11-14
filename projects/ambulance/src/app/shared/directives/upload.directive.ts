import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[upload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUpload: EventEmitter<File> = new EventEmitter<File>();

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: any) {
    event.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    this.onHover.emit(false);

    const file: File = event.dataTransfer.files[0];
    this.onUpload.emit(file);
  }
}
