import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SuperDude', strength: 55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true)) //"of" create an observable so the mock object return an observable when deleteHero is called
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2); //test if the state of the component has change (state-based test)
    })

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      //expect(mockHeroService.deleteHero).toHaveBeenCalled();
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]); //test if delete hero was called with the correct parameter (interaction test)
    })
  })
})
