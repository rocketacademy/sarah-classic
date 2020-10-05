# 10.1: Objects

{% embed url="https://www.youtube.com/watch?v=\_s1j9A\_JF70" caption="" %}

Now we'll continue to build programs of increasing complexity.

We'll be implementing a game of cards, and we'll introduce a new kind of data that will make our programs easier to write and reason about.

Note that the javascript `object` is not the same object concept that is usually referred to in _Object Oriented Programming_. A javascript object is referred to as a _hash_ or _dictionary_ in some other languages.

## Compound Data

What is a deck of cards and how could we represent the deck in our program?

First of all, a deck of cards is a bunch of data that is **of the same type**. This implies an array.

We could create an array like so:

```javascript
var cards = ["nine of hearts", "ten of hearts", "jack of hearts"];
```

Is this a good representation of a game of cards?

Let's start to think abstractly about what kind of data a deck of cards contains?

### Order

A deck of cards is implicitly ordered. An array was a good choice to represent this.

### Card Order

Each card has a rank. Our array of strings doesn't represent this rank, except by the sub-string "nine" etc. A card has a suit. We are representing this by the string "heart". A card has a rank of face cards, which we are not representing. \(`jack < queen`\)

For a given card we need a way to represent the different values in that individual card.

## Objects as Compound Data

We can use an object to represent a single piece of data that contains heterogenous data- data of all different types.

```javascript
var singleCard = {
  rank: 11,
  suit: "heart",
  name: "jack",
};
```

We've encoded in this variable the three important pieces of data about the card.

We can make this into an array of objects.

### Object Data Access

```javascript
singleCard.rank;
```

```javascript
singleCard.suit;
```

```javascript
singleCard.name;
```

## Objects + Arrays

We can represent a set of card objects in an array.

```javascript
var cards = [
  {
    rank: 1,
    suit: "heart",
    name: "one"
  },
  {
    rank: 2,
    suit: "heart",
    name: "two"
  }
    ...
];
```

## Objects + Arrays + Loops

We can use loops to access all of the cards in an array.



```javascript
var index = 0;

while (index < cards.length) {
  // we can access the values in *each* card object with the dot notation.
  console.log(cards[index].name);

  // construct a string using the values inside a singel card object
  var cardTitle = cards[index].name + " of " + cards[index].suit;

  console.log(cardTitle);

  index = index + 1;
}
```

Inside the loop we can add the attribute name onto the end of an array element access: 

```javascript
cards[0].name // gets the name of the first card
```

## Card Shuffling

We can shuffle a deck of cards by swapping around the objects inside the array.

It's not too important to understand all the aspects of this loop. It's just important that we have a deck that is randomly ordered.

```javascript
// get a random index from an array given it's size
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// cards is an array of card objects
var shuffleCards = function (cards) {
  var currentIndex = 0;

  // loop over the entire cards array
  while (currentIndex < cards.length) {
    // select a random position from the deck
    var randomIndex = getRandomIndex(cards.length);

    // get the current card in the loop
    var currentItem = cards[currentIndex];

    // get the random card
    var randomItem = cards[randomIndex];

    // swap the current card and the random card
    cards[currentIndex] = randomItem;
    cards[randomIndex] = currentItem;

    index = index + 1;
  }

  // give back the shuffled deck
  return cards;
};
```

## High Card

The high card draws two random cards and compares them. We are using `pop` to take them off the top of the deck, because the deck is already randomly ordered.

We can use the rank attribute of the cards to compare.

```javascript
var originalCards = [
  // card 1,
  // card 2,
  // ...
];

var cards = shuffleCards(originalCards);

var main = function (input) {
  // take two card off the top of the deck
  var computerCard = cards.pop();
  var playerCard = cards.pop();

  // construct a string of the cards
  // that were drawn
  var myOutputValue =
    "They had: " +
    computerCard.name +
    " of " +
    computerCard.suit +
    "you had: " +
    playerCard.name +
    " of " +
    playerCard.suit;

  // use the rank attribute of each card to compare them
  if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "computer wins.";
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "you win!!";
  } else {
    myOutputValue = myOutputValue + " its a tie.";
  }

  return myOutputValue;
};
```

## Deck

Because a deck of cards is always the same we can hard code all 52 of them.

```javascript
var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1,
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11,
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12,
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13,
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1,
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11,
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12,
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13,
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1,
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11,
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12,
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13,
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1,
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11,
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12,
  },
  {
    name: "king",
    suit: "spades",
    rank: 13,
  },
];
```

## Exercises

{% hint style="info" %}
\*\*1\) Implement the above code.

2\) Change the high card program so that the player and computer draw 2 cards instead of 1. Highest of any of the cards wins.\*\*
{% endhint %}

