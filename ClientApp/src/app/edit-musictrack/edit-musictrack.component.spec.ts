import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMusictrackComponent } from './edit-musictrack.component';

describe('EditMusictrackComponent', () => {
  let component: EditMusictrackComponent;
  let fixture: ComponentFixture<EditMusictrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusictrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusictrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
