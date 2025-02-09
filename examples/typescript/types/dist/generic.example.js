"use strict";
function getSingleUser(users) {
    return users[0];
}
function getSingleProduct(products) {
    return products[0];
}
function getSingleObjectFromDB(arr) {
    return { ...arr[0], id: Math.random() * 9999 };
}
class PlayList {
    list = [];
    add(someElement) {
        this.list.push(someElement);
    }
    play(item) {
        const currentIndex = this.list.findIndex((listItem) => listItem.title === item.title);
        if (currentIndex > -1) {
            this.list.splice(currentIndex, 1);
        }
    }
}
const songs = new PlayList();
songs.add({
    title: " test",
    artist: "veronica",
    length: 12,
    name: "silence and flame",
    writer: "Adle",
});
