
const queryStringbkp = window.location.search;

 // Create a new URLSearchParams object from the query string
 const urlParamsbkp = new URLSearchParams(queryStringbkp);
 var startValuebkp = urlParamsbkp.get('start');
 var endValuebkp = urlParamsbkp.get('end');
 var hallnumbkp = urlParamsbkp.get('hallnum');
 // Get the value of a specific parameter
 var categoryparambkp = decrypt(urlParamsbkp.get('category'));
 //checkurlparm(categoryparambkp);
 if (categoryparambkp.includes('||')) {
    // Replace '||' with another string
    categoryparambkp = categoryparambkp.replace(/\|\|/g, '&');
  }
var networkcategory = categoryparambkp.replace(/[,\s&:/]/g, '').substring(0, 12);