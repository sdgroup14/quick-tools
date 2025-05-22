import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCsvComponent } from './json-csv.component';

describe('JsonCsvComponent', () => {
  let component: JsonCsvComponent;
  let fixture: ComponentFixture<JsonCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonCsvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
