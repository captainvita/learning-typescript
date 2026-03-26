// --- ASYNCRONOUS PROGRAMMING -------------------

const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=2.7456&longitude=101.7099&current=temperature_2m";
let isLoading = true;

// Promose
const somePromise = new Promise((resolve, reject) => {
  const result = 4;
  if (result === 4) {
    resolve("Fulfilled");
  } else {
    reject("Rejected");
  }
});

somePromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("Completed");
  });

// Async/ Await/ Fetch API

// Old way to fetch data async
fetch(apiUrl)
  .then((Response) => {
    console.log("Fetch started");
    if (!Response.ok) {
      throw new Error("Error: " + Response.status);
    }
    return Response.json();
  })
  .then((data) => {
    console.log("KLIA Temperature: " + data.current.temperature_2m + "C");
  })
  .catch((error) => {
    console.error("Catch error: " + error);
  })
  .finally(() => {
    isLoading = false;
    console.log("Fetch completed");
  });

// New way to fetch data async
async function newPromise(url: string) {
  isLoading = true;
  try {
    console.log("Fetch started");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching: " + response.status);
    }
    const data = await response.json();
    console.log("KLIA Temperature: " + data.current.temperature_2m);
  } catch (error) {
    console.error("Catch error: " + error);
  } finally {
    isLoading = false;
    console.log("Fetch completed");
  }
}

newPromise(apiUrl);
