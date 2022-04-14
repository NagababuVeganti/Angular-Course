import {compute} from './compute'
describe('compute',()=>{

    it('Should return 0 if input is negatice',()=>{
        const result=compute(-1)
        expect(result).toBe(0);
    })

    it('Should increment  if input is postive',()=>{
        const result=compute(1)
        expect(result).toBe(2);
    })
    
})
