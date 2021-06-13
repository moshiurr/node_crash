const url = require("url");

const myUrl = new URL(
	"https://collprodss.colleague.upei.ca/Student/Account/Login?ReturnUrl=%2fStudent%3fhideProxyDialog%3dfalse&hideProxyDialog=false"
);

//serialize url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);
//hostname -does not get port
console.log(myUrl.hostname);
//path name
console.log(myUrl.pathname);
//sealized query
console.log(myUrl.search);
//Param object
console.log(myUrl.searchParams);
