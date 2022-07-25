var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
let vapidKeys = {
    publicKey: 'BHgeqb-5DT9Kil88pBpp2q4t9SuePb4ExSrgN1oFCEIMlrwsv0V5F5O7oKGB63N7sZcEIn5bX9M5DCvWP2N2wpw',
    privateKey: 'ssB6gC1EBvPwQzon2r_kT2N4ztIRv4T32pQVuXDrA88'
}
push.setVapidDetails('mailto:test@test.co.in', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')