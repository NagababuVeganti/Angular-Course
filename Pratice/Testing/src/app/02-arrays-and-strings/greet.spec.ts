import {greet} from './greet'
describe('Greeting',()=>{

    it('Should contian Mosh',()=>{
        const result=greet("Nagababu")
        expect(result).toContain('Nagababu')
    })
    
})
