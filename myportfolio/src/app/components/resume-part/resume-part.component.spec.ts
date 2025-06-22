import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePartComponent } from './resume-part.component';

describe('ResumePartComponent', () => {
  let component: ResumePartComponent;
  let fixture: ComponentFixture<ResumePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
