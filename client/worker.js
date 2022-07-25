console.log("Service worker loaded");

self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "Web p ush notification",//the body of the push notification
            image: "https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_1280.png",
            icon: "https://pixabay.com/vectors/bell-notification-communication-1096280/" 
        }
    );
});