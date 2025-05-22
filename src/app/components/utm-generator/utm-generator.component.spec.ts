import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmGeneratorComponent } from './utm-generator.component';

describe('UtmGeneratorComponent', () => {
  let component: UtmGeneratorComponent;
  let fixture: ComponentFixture<UtmGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtmGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtmGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
