# Objects

Now we'll continue to build programs of increasing complexity.

We'll be implementing a game of cards, and we'll introduce a new kind of data that will make our programs easier to write and reason about.

Note that the javascript `object` is not the same object concept that is usually refered to in *Object Oriented Programming*. A javascript obejct is refered to as a *hash* or *dictionary* in some other languages.

### Compound Data

What is a deck of cards and how could we represent the deck in our program?

First of all, a deck of cards is a bunch of data that is **of the same type**. This implies an array.

We could create an array like so:

```js
const deckOfCards = ['nine of hearts', 'ten of hearts', 'jack of hearts'];
```

Is this a good representation of a game of cards?

Let's start to think abstractly about what kind of data a deck of cards contains?

#### order
A deck of cards is implicitly ordered. An array was a good choice to represent this.

#### card order
Each card has an rank. Our array of strings doesnt represent this rank, except by the sub-string "nine" etc. A card has a suit. We are representing this by the string "heart". A card has a rank of face cards, which we are not representing. (`jack < queen`)

For a given card we need a way to represent the different values in that individual card.

#### objects as compound data

We can use an object to represent a single piece of data that contains heterogenous data- data of all different types.

```js
const singleCard = {
  rank: 11,
  suit: 'heart',
  name: 'jack',
};
```

We've encoded in this variable the three important pieces of data about the card.

We can make this into an array of objects.

#### object data access

```js
singleCard.rank;
```

```js
singleCard.suit;
```

```js
singleCard.name;
```

## card shuffling

```js
const getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

const shuffleCards = function (cards) {
  let index = 0;
  var cards = [1, 2, 3];

  while (index < cards.length) {
    const randomIndex = getRandomIndex(cards.length);

    const currentItem = cards[index];

    const randomItem = cards[randomIndex];

    cards[index] = randomItem;
    cards[randomIndex] = currentItem;

    index += 1;
  }

  return cards;
};
```

## High Card

```js
const originalCards = deckOfCards;

const cards = shuffleCards(originalCards);

const main = function (input) {
  const computerCard = cards.pop();
  const playerCard = cards.pop();

  let myOutputValue = `They had: ${computerCard.name} of ${computerCard.suit}. You had: ${playerCard.name} of ${playerCard.suit}`;

  if (computerCard.rank > playerCard.rank) {
    myOutputValue += 'computer wins.';
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue += 'you win!!';
  } else {
    myOutputValue += ' its a tie.';
  }

  return myOutputValue;
};
```




