import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebLoginPage } from './prueb-login.page';

describe('PruebLoginPage', () => {
  let component: PruebLoginPage;
  let fixture: ComponentFixture<PruebLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
