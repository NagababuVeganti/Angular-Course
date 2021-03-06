import { VoterComponent } from './voter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser'
describe('VoterComponent', () => {

  let component:VoterComponent;
  let fixture:ComponentFixture<VoterComponent>;

  beforeEach(() => {

      TestBed.configureTestingModule({
        declarations:[VoterComponent]

      });

     fixture= TestBed.createComponent(VoterComponent)

     component=fixture.componentInstance;
     
     //retruns HTML code for the component
     fixture.nativeElement

  });

  it('render total votes', () => {
    component.othersVote=20;
    component.myVote=1;
    fixture.detectChanges();
    let de=fixture.debugElement.query(By.css('.vote-count'));
    let el:HTMLElement=de.nativeElement
    expect(el.innerText).toContain("21");

  });

  it('it should highlight upvote button if upvoted',()=>{

    component.myVote=1;
    fixture.detectChanges();

    let de =fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    
    expect(de.classes['highlighted']).toBeTruthy()
    
     
  })
});
