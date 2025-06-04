import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesListPageComponent } from './machines-list-page.component';

describe('MachinesListPageComponent', () => {
  let component: MachinesListPageComponent;
  let fixture: ComponentFixture<MachinesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
