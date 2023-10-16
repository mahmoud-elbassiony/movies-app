import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistemptyComponent } from './watchlistempty.component';

describe('WatchlistemptyComponent', () => {
  let component: WatchlistemptyComponent;
  let fixture: ComponentFixture<WatchlistemptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistemptyComponent]
    });
    fixture = TestBed.createComponent(WatchlistemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
