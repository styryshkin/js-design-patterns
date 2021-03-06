class Customer {
  constructor(first: string, last: string, status: string) {
    this.first = first;
    this.last = last;
    this.status = status;
  }

  public say(): string {
    return `name: ${this.first} ${this.last}, status: ${this.status}`;
  }
}

/**
 * Clones objects given a prototype object.
 */
class CustomerPrototype {
  constructor(proto: Customer) {
    this.proto = proto;
  }

  public clone(): Customer {
    const customer = new Customer();

    customer.first = this.proto.first;
    customer.last = this.proto.last;
    customer.status = this.proto.status;

    return customer;
  }
}

/**
 * Usage example
 */
function run() {
  const proto = new Customer('n/a', 'n/a', 'pending');
  const prototype = new CustomerPrototype(proto);

  const customer = prototype.clone();
  customer.say();
}

run();
