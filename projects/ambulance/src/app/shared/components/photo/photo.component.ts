import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebcamImage } from 'ngx-webcam';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;
  @Input() photoByDefault: string = '';
  statusHover = false;
  isUsingWebCam = false;
  triggerSnapshot = new Subject<void>();
  value!: File;

  onChange = (_: any) => {};
  onTouched = () => {};
  isDisabled = false;

  constructor() {}

  writeValue(value: File) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {}

  fileUpload(file: File) {
    if (!file.type.startsWith('image')) {
      return;
    }

    this.onTouched();
    this.onChange(file);

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

  loadingPhoto(image: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${image})`;
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const path = `${environment.API_URL}/photos/${this.photoByDefault}`;
      this.loadingPhoto(path);
    }
  }
}
