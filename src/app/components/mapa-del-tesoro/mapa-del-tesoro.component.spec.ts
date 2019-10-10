import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDelTesoroComponent } from './mapa-del-tesoro.component';

describe('MapaDelTesoroComponent', () => {
  let component: MapaDelTesoroComponent;
  let fixture: ComponentFixture<MapaDelTesoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDelTesoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDelTesoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
