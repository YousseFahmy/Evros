import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcBoxComponent } from './npc-box.component';

describe('NpcBoxComponent', () => {
  let component: NpcBoxComponent;
  let fixture: ComponentFixture<NpcBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpcBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
