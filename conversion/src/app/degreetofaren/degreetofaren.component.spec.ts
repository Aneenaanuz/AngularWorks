import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreetofarenComponent } from './degreetofaren.component';

describe('DegreetofarenComponent', () => {
  let component: DegreetofarenComponent;
  let fixture: ComponentFixture<DegreetofarenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreetofarenComponent]
    });
    fixture = TestBed.createComponent(DegreetofarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
