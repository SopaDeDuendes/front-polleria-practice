import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFacheroComponent } from './header-fachero.component';

describe('HeaderFacheroComponent', () => {
  let component: HeaderFacheroComponent;
  let fixture: ComponentFixture<HeaderFacheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFacheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderFacheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
