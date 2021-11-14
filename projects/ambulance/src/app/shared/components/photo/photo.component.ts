import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;
  statusHover = false;
  isUsingWebCam = false;
  triggerSnapshot = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}

  fileUpload(file: File) {
    if (!file.type.startsWith('image')) {
      return;
    }

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.photo.nativeElement.style.backgroundImage = `url(${dataBase64})`;
    };

    fr.readAsDataURL(file);
  }

  selectImage(event: any) {
    const file: File = event.target.files[0];
    this.fileUpload(file);
  }

  executeLoadImage() {
    this.file.nativeElement.click();
    return false;
  }

  changeOriginPhoto(evt: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
  }

  capturePhotoFromWeb(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/jpeg' }))
      .then((file) => {
        this.fileUpload(file);
        this.isUsingWebCam = false;
      });
  }

  triggerAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }
}
