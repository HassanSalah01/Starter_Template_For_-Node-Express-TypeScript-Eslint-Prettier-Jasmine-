//Normal Function Testing
import {arr} from "../../mid/array";



describe("test case 1",()=>{
    it("should return number bigger than 1",()=>{
        expect(arr([1,2,3,4])).toBeGreaterThan(1)
    })
})
