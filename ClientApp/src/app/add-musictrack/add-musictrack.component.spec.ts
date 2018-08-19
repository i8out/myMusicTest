import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusictrackComponent } from './add-musictrack.component';

describe('AddMusictrackComponent', () => {
  let component: AddMusictrackComponent;
  let fixture: ComponentFixture<AddMusictrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusictrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusictrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
