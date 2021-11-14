import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
})
export class FormComponent implements OnInit {
  title: string;
  group!: FormGroup;
  photoToShow = '';

  constructor(
    private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      segundo_nombre: new FormControl(
        this.data?.segundo_nombre,
        Validators.required
      ),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      correo: new FormControl(this.data?.correo, Validators.required),
    });

    if (this.data) {
      this.group.addControl('foto', new FormControl(null));
      if (this.data.foto) {
        this.photoToShow = this.data.foto;
      }
    } else {
      this.group.addControl('foto', new FormControl(null, Validators.required));
    }

    /*     this.group.controls['foto'].disable();
    this.group.controls['nombre'].disable(); */
  }

  save() {
    const record = this.group.value;
    const recordId = record.id;

    delete record.id;

    const formData = new FormData();
    for (const key of Object.keys(record)) {
      const value = record[key];
      formData.append(key, value);
    }

    this.reference.close({ id: recordId, medic: formData });
  }
}
