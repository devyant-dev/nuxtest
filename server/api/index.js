export default defineEventHandler((event) => {

  // db 호출은 여기서 가능

  return {
    work: [
      {id: 0, name: "clone1", thumb: "img/01/jpg"},
      {id: 1, name: "clone2", thumb: "img/01/jpg"},
      {id: 2, name: "clone3", thumb: "img/01/jpg"}
    ]
  }
})