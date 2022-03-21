const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

const HelloAsycn = async () => {
  const hello = await helloWorld();
  //const hello2 = await helloWorld();
  console.log(hello);
};

HelloAsycn();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
