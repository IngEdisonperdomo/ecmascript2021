class Message {
  //private method
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show("hola");

class anyClass {
  constructor(element) {
    //no sea liberado de la memoria
    this.ref = new WeakRef(element);
  }
}
