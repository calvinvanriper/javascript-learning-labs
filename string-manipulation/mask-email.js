function maskEmail(email) {
  let domain = email.indexOf("@");
  let counter = domain-2;
  let firstLetter = email.slice(0,1);
  let lastLetter = email.slice((domain-1),domain);
  let masking = "*";
  
  return `${firstLetter}${masking.repeat(counter)}${lastLetter}${email.slice(domain)}`;
}

const email = "calvin.vanriper.ii@gmail.com";
console.log(maskEmail(email));
