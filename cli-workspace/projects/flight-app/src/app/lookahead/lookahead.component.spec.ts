/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LookaheadComponent } from './lookahead.component';

describe('LookaheadComponent', () => {
  let component: LookaheadComponent;
  let fixture: ComponentFixture<LookaheadComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LookaheadComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LookaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
