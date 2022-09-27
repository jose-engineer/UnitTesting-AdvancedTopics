import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>; //A fixture is a wrapper for a component (HeroComponent in this case)

  beforeEach(() => {
    TestBed.configureTestingModule({ //create a testing module
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent); //createComponent() use the testing module that we created on line 10 and construct the HeroComponent
  });

  it('should have the correct hero', () => { //Isolated test
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name in an anchor tag', () => { //Integration test (we are checking the DOM)
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
    fixture.detectChanges();

    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('SuperDude');
  })

})
