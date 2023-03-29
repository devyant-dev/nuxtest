// Server 
// ㄴapi 
// ㄴmiddleware 안에 문서는 api서버가 실행되기 전에 무조건 실행함


// export default defineEventHandler( async (event) => {

//   // get, post, put, delete
//   // params값, body안 데이터 추출

//   const method = getMethod(event);

//   //console.log(method);
//   let rows;
//   let qu = '';


//   if(method == 'POST'){
//     let body = await readBody(event);
//     let {name, email, date} = body;
//     console.log(name, email, date);
//     qu = `insert into test (name, email, date) values ("${name}", "${email}", "${date}")`
//     [rows] = await event.context.db.execute(qu);
//   }else{
//     qu = 'select * from test';
//     [rows] = await event.context.db.execute(qu);
//   }
  
//   return rows;
// })


export default defineEventHandler(async (event) => {
  //get, post, put, delete
  //params값, body안 데이터 추출
  const method = getMethod(event);
  let rows;
  let q = '';

  if (method == 'POST') {
      let body = await readBody(event);
      let { name, email, date } = body;
      q = `insert into test (name,email,date) values ("${name}","${email}","${date}")`;
      [rows] = await event.context.db.execute(q);
  } else {
      q = 'select * from test';
      [rows] = await event.context.db.execute(q);
  }
  return rows;

})