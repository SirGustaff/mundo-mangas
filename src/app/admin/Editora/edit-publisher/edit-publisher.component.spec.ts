import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublisherComponent } from './edit-publisher.component';

describe('EditPublisherComponent', () => {
  let component: EditPublisherComponent;
  let fixture: ComponentFixture<EditPublisherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPublisherComponent]
    });
    fixture = TestBed.createComponent(EditPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
