import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component:VoteComponent;

  //This function will be called before each test 
  beforeEach(()=>{
    component=new VoteComponent()
  })

  //This Function will be called after each test.

  afterEach(()=>{
    console.log("Test Completed.")
  })

  //THis function is executed once before all tests.
  beforeAll(()=>{

  }); 

  it('Should Increment totalVotes', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement total Votes', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});