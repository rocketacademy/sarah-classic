# Day 12: DOM

  
Begin by cloning a new copy of the [DOM starter code.](https://github.com/rocketacademy/swe101-next-steps-dom) Reminder to `npm install` to activate ESLint!‌

## Creating Elements

### makeBox

Create an empty function called `makeBox`.

`makeBox` will create a new HTML element on screen each time it's called.

If you were to write out the HTML element it would look like this:

```markup
<div>
    <p>Make Box was Called</p>
    <p>Hello :)</p>
</div>
```

Specifically your function needs 7 steps:

1. Create the `p` paragraph tag. Something like: `var pOne = document.createElement('p');`
2. Fill the tag with text using `innerText`. Something like: `pOne.innerText = 'haha';`
3. Create a second `p` paragraph tag.
4. Fill the tag with text using `innerText`.
5. Create the `div` tag.
6. Put both `p` tags into the `div` tag using `appendChild`. Something like: `divTag.appendChild( pOne );`
7. Put the `div` tag onto the page with `document.body.appendChild.`

Edit `style.css` so you can clearly identify the box:

```css
div{
    background-color:white;
    border:2px solid red;
    padding:10px;
    margin:10px;
}
```

Call the `makeBox` function inside of `script.js`.

Refer to [the gitbook page](../12-next-steps/12.1-browser-applications-with-dom.md) if you need to.

### makeCard

You can use DOM to set the `img` `src` attribute.

Given this HTML:

```css
<section>
    <p>
        Hello Ducks
    </p>
    <p>
        <img src="https://gblobscdn.gitbook.com/assets%2F-MBhJa4xpezxI4J9lolG%2F-MGrF6rE0CBWVzznQayq%2F-MGrGfwNRi1D6aKWmg4G%2Fducks2.jpeg?alt=media&token=9dff244b-10e8-4fab-ab68-715e09998ff3"/>
    </p>
</section>
```

An example of setting the `src` attribute in JS would look like this:

```javascript
imgTag.src = 'https://gblobscdn.gitbook.com/assets%2F-MBhJa4xpezxI4J9lolG%2F-MGrF6rE0CBWVzznQayq%2F-MGrGfwNRi1D6aKWmg4G%2Fducks2.jpeg?alt=media&token=9dff244b-10e8-4fab-ab68-715e09998ff3';
```

Edit `style.css` for `makeCard` as well:

```css
section{
    background-color:grey;
    border:2px solid blue;
    padding:10px;
    margin:10px;
}
```

Call `makeCard` in `script.js`.

## Events

Change `makeCard` so that it has a `button` inside it.

```markup
<div>
    <p>Make Box was Called</p>
    <p>Hello :)</p>
    <button id="makeBoxButton">make card</button>
</div>
```

When this button gets clicked it calls `makeCard`- Call `addEventListener` on the button. Set the callback function of the button to `makeCard`.

```javascript
var button = document.createElement('button');
button.innerText = 'make card';
button.id = 'makeBoxButton';
button.addEventListener('click', makeCard);
```

## Further

### Multi Card Button

Change the `makeCard` function so that it creates multiple cards when the button is clicked- change `makeCard` so that the elements are created and appended _inside a loop_. \(This version has the same image in each card\).

### More Images

Get another image url from the internet. \(Search for an image, right click on it in google chrome and select "Copy Image Address"\).

Put these images into an array and loop over each image in the array to create the set of cards.

### Random Image

Change the makeCard function so that when you click, you get a single card with a random image.

### Random x Images

Add an input to makeBox.

The user can fill out a number, _x_ in the input. When they click the button, _x_ images are made inside the card.

