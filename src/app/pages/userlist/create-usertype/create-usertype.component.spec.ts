import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsertypeComponent } from './create-usertype.component';

describe('CreateUsertypeComponent', () => {
  let component: CreateUsertypeComponent;
  let fixture: ComponentFixture<CreateUsertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUsertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
