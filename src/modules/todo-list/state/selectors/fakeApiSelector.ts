import { selector } from "recoil";

export const fakeApiSelector = selector({
  key: 'fake',
  get: async () => {
    const response = await fetch('https://dummyjson.com/products/1')
      console.log(response.status);
    if(response.status >= 400) {
      throw new Error()
    }
      
    return response.json()
  }
})