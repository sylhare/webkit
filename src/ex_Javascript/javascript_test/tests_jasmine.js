

const isPalindrome = (str) => {
    // noinspection JSAnnotator
    return str
        .toString()
        .split("")
        .reverse()
        .join("") === str.toString();
};

describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toEqual(true);
    });
    it("returns false if the string isn't a palindrome", () => {
        expect(isPalindrome("Bubba")).toEqual(false);
    });
    it("returns true if a number is a palindrome", () => {
        expect(isPalindrome(1001)).toEqual(true);
    });
});


add_elem = function (options) {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var element = document.body;
    element.appendChild(para);
  };

describe("dom manipulation", function (){

  afterEach(function (){
      var body = document.body;
      body.removeChild(body.lastElementChild);
  });

  it("should add an element", function (){
    add_elem();
    expect(document.body.children.length).toEqual(2);
    });
    
});