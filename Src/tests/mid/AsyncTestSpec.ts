//Async Testing ......
import {getData} from "../../mid/AsyncTest"

describe("An Async Function test",()=>{
    it("should return The UserId",async()=>{
        const data = await getData();
        expect(data).toEqual(1);
    })
})
