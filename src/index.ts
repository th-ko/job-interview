// import { getUrl } from "./get-url";
// getUrl("https://httpbin.org/status/500").then(
//   res => console.log(res),
//   err => console.error("ERROR:", err)
// );

import { multiFetch } from "./multi-fetch";

multiFetch({
  someRequest: "https://httpbin.org/get",
  someFailingRequest: "https://httpbin.org/status/500",
  someOtherRequest: "https://httpbin.org/ip"
}).then(console.log);

// process.on("unhandledRejection", (reason, p) => {
//   console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
//   // application specific logging, throwing an error, or other logic here
// });
