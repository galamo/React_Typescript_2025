type Product = {
  name: string;
  price: number;
};

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

function getSingleUser(users: Array<User>): User {
  return users[0];
}

function getSingleProduct(products: Array<Product>): Product {
  return products[0];
}

function getSingleObjectFromDB<T>(arr: Array<T>): T & { id: number } {
  return { ...arr[0], id: Math.random() * 9999 };
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

interface Song {
  title: string;
  artist: string;
  length: number;
  name: string;
  writer: string;
}

class PlayList<T extends { title: string }> {
  private list: T[] = [];
  add(someElement: T) {
    this.list.push(someElement);
  }
  play(item: T) {
    const currentIndex = this.list.findIndex(
      (listItem) => listItem.title === item.title
    );
    if (currentIndex > -1) {
      this.list.splice(currentIndex, 1);
    }
  }
}

const songs = new PlayList<Song>();
songs.add({
  title: " test",
  artist: "veronica",
  length: 12,
  name: "silence and flame",
  writer: "Adle",
});
