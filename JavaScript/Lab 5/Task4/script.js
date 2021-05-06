function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.numOfBooks = booksCount;
  this.volume = this.height * this.width * this.length;
  this.material = material;
  this.content = [];

  var booksCount = 0;

  this.getBooksCount = function () {
    return booksCount;
  };

  this.createBook = function () {
    var b = new Book("book1", 4, "andrew", 4);
    this.content.push(b);
    booksCount++;
  };

  this.deleteBook = function (title) {
    for (var index = 0; index < this.content.length; index++) {
      var element = this.content[index];
      if (element.title === title) {
        this.content.splice(index, index);
        break;
      }
    }
  };

  this.toString = function () {
    return `height=${this.height} width=${this.width} length=${this.length} numOfBook=${this.numOfBooks} volume=${this.volume} material=${this.material}`;
  };

  this.valueof = function () {
    return this.getBooksCount();
  };
}
function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  this.title = title;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numofPages = numofPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
}
var b1 = new Box(120, 120, 10);
console.log(b1.toString());
