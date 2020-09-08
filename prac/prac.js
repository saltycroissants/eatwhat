const express = require('express');
let app = express();
const client_id = 'hBwX2RgYzXT21cJDCpTR';
const client_secret = 'jSx89D1yl0';
const option = {
  query  :'고기', //이미지 검색 텍스트
}
console.log(client_id);

request.get({
    url:'https://openapi.naver.com/v1/search/local.json', //xml 요청 주소는 https://openapi.naver.com/v1/search/local.xml
    qs :option,
    headers:{
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }, function(err, res, body) {
    let json = JSON.parse(body) //json으로 파싱
    console.log(json)
  })