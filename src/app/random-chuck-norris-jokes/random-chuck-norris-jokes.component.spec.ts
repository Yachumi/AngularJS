import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChuckNorrisJokesComponent } from './random-chuck-norris-jokes.component';

describe('RandomChuckNorrisJokesComponent', () => {
  let component: RandomChuckNorrisJokesComponent;
  let fixture: ComponentFixture<RandomChuckNorrisJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChuckNorrisJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChuckNorrisJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
