export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail (email: string){
    
    const userMail = email.substring(0, email.indexOf('@'));
    const domain = email.substring(email.indexOf('@'), email.length)
     
    if(userMail.length >5){
        return `${userMail.slice(0,3)}...${domain}`

    }else if(userMail.length >4){
        return `${userMail.slice(0,2)}...${domain}`
        
    }else {
        return `...${domain}`
    }
    }

/*function protectEmail (email: string){
    const [username, domain] = email.split('@')
    const newUsername = username.slice(0,3);
    return `${newUsername}...@${domain}`
}*/

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com