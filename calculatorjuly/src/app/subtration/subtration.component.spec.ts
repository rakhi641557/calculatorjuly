import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtrationComponent } from './subtration.component';

describe('SubtrationComponent', () => {
  let component: SubtrationComponent;
  let fixture: ComponentFixture<SubtrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
