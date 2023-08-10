import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostosComponent } from './postos.component';

describe('PostosComponent', () => {
  let component: PostosComponent;
  let fixture: ComponentFixture<PostosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostosComponent]
    });
    fixture = TestBed.createComponent(PostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
