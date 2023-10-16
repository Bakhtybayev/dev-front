import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsPage } from './chats.page';

describe('ChatsPage', () => {
  let component: ChatsPage;
  let fixture: ComponentFixture<ChatsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatsPage]
    });
    fixture = TestBed.createComponent(ChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
