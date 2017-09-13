function Element(value, next) {
  if (!(this instanceof Element)) {
    throw new Error('Element is a constructor.');
  }

  if (value === undefined) {
    throw new Error('Value required.');
  }

  if (next !== undefined && !(next instanceof Element)) {
    throw new Error('A Element instance as next value is required.');
  }

  this.value = value;
  this.next = next;
}

function List() {}

List.prototype.push = function (value) {
  if (value === undefined) {
    throw new Error('Argument required.');
  }

  const newEl = (value instanceof Element)
    ? value
    : new Element(value);

  if (!this.head) {
    this.head = newEl;
    return;
  }

  let lastEl = this.head;
  while (lastEl.next) {
    lastEl = lastEl.next;
  }

  lastEl.next = newEl;
};

List.prototype.unshift = function (value) {
  if (value === undefined) {
    throw new Error('Argument required.');
  }

  const newEl = (value instanceof Element)
    ? value
    : new Element(value);

  newEl.next = this.head;
  this.head = newEl;
};

List.prototype.shift = function () {
  if (!this.head) {
    return;
  }

  this.head = this.head.next;
};

List.prototype.pop = function () {
  if (!this.head) {
    return;
  }

  let penultEl,
    lastEl = this.head;
  while (lastEl.next) {
    penultEl = lastEl;
    lastEl = lastEl.next;
  }

  if (!penultEl) {
    this.head = undefined;
  } else {
    penultEl.next = undefined;
  }
};

List.prototype.reverse = function () {
  if (!this.head) {
    return;
  }

  let current,
    previous;
  while (this.head) {
    current = this.head;
    this.shift();
    current.next = previous;
    previous = current;
  }

  this.head = previous;
};

List.prototype.toArray = function () {
  const array = [];
  let current = this.head;

  while (current) {
    array.push(current.value);
    current = current.next;
  }

  return array;
};

List.fromArray = function (array) {
  const list = new List();
  array.forEach((item) => {
    list.push(new Element(item));
  });

  return list;
};

exports.List = List;
exports.Element = Element;
