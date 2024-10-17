import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsRequestsComponent } from './lists-requests.component';

describe('ListsRequestsComponent', () => {
  let component: ListsRequestsComponent;
  let fixture: ComponentFixture<ListsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
