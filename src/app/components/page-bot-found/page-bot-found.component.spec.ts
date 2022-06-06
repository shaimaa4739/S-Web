import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBotFoundComponent } from './page-bot-found.component';

describe('PageBotFoundComponent', () => {
  let component: PageBotFoundComponent;
  let fixture: ComponentFixture<PageBotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
