import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogoutDialogComponent } from './auth-logout-dialog.component';

describe('AuthLogoutDialogComponent', () => {
  let component: AuthLogoutDialogComponent;
  let fixture: ComponentFixture<AuthLogoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLogoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
