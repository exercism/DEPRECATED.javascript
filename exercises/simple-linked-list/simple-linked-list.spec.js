const SimpleLinkedList = require('./simple-linked-list');

const List = SimpleLinkedList.List;
const Element = SimpleLinkedList.Element;

describe('simple-linked-list', () => {
  it('exports a List constructor', () => {
    expect(List).toBeDefined();
  });

  xit('exports a Element constructor', () => {
    expect(Element).toBeDefined();
  });

  describe('Element', () => {
    xit('is a constructor', () => {
      const el = new Element(1);
      expect(el).toBeDefined();

      expect(() => {
        const el = Element(1);
      }).toThrow();
    });

    xit('requires an argument', () => {
      const el = new Element(1);
      expect(el).toBeDefined();

      expect(() => {
        const el = new Element();
      }).toThrow();
    });

    xit('has as a value', () => {
      const el = new Element(1);
      expect(el.value).toBe(1);
    });

    xit('reference to next is undefined by default', () => {
      const el = new Element(1);
      expect(el.next).toBeUndefined();
    });
  });

  xit('accepts a reference to the next element', () => {
    const elOne = new Element(1);
    const elTwo = new Element(2, elOne);
    expect(elTwo.next).toBe(elOne);
  });

  xit('requires an instance of Element as next element', () => {
    expect(() => {
      var el = new Element(1, true);
      var el = new Element(1, false);
    }).toThrow();
    expect(() => {
      const el = new Element(1, 'lorem ipsum');
    }).toThrow();
    expect(() => {
      const el = new Element(1, []);
    }).toThrow();
    expect(() => {
      const el = new Element(1, {});
    }).toThrow();
  });

  describe('List', () => {
    xit('is a constructor', () => {
      const ll = new List();
      expect(ll).toBeDefined();
    });

    xit('allows you to append an element', () => {
      const ll = new List();
      const el = new Element(1);
      ll.push(el);
      expect(ll.head).toBe(el);

      const ll2 = new List();
      const elOne = new Element(1);
      const elTwo = new Element(2);
      ll2.push(elOne);
      ll2.push(elTwo);
      expect(ll2.head.next).toBe(elTwo);
    });

    xit('allows you to prepend an element', () => {
      const ll = new List();
      const el = new Element(1);
      ll.unshift(el);
      expect(ll.head).toBe(el);

      const ll2 = new List();
      const elOne = new Element(1);
      const elTwo = new Element(2);
      ll2.unshift(elOne);
      ll2.unshift(elTwo);
      expect(ll2.head).toBe(elTwo);
    });

    xit('allows you to remove the first element', () => {
      const ll = new List();
      ll.push(new Element(1));
      ll.shift();
      expect(ll.head).toBeUndefined();

      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.shift();
      expect(ll.head.value).toBe(3);
    });

    xit('allows you to remove the last element', () => {
      const ll = new List();
      ll.push(new Element(1));
      ll.pop();
      expect(ll.head).toBeUndefined();

      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.pop();
      expect(ll.head.next).toBeUndefined();
    });

    xit('allows you to convert an array to a List', () => {
      const ll = List.fromArray([1, 2]);

      expect(ll.head.value).toBe(1);
      expect(ll.head.next.value).toBe(2);
    });

    xit('allows you to convert a List into an array', () => {
      const ll = new List();
      ll.push(new Element(1));
      ll.push(new Element(2));
      const a = ll.toArray();

      expect(a instanceof Array).toBe(true);
      expect(a.length).toBe(2);
      expect(a[0]).toBe(1);
      expect(a[1]).toBe(2);

      expect(ll.head.value).toBe(1);
      expect(ll.head.next.value).toBe(2);
    });

    xit('allows you to reverse a List', () => {
      const ll = new List();
      ll.push(new Element(1));
      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.reverse();

      expect(ll.head.value).toBe(3);
      expect(ll.head.next.value).toBe(2);
      expect(ll.head.next.next.value).toBe(1);
    });
  });
});
