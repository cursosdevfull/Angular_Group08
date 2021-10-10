import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdevTableComponent } from './cdev-table.component';

describe('CdevTableComponent', () => {
  let component: CdevTableComponent;
  let fixture: ComponentFixture<CdevTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdevTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdevTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
