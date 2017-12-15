"use strict";

let C = {};

C.append = function(items, prefix) {
  items.forEach((item) => {
    let name = item.toUpperCase();
    if (prefix)
      name = prefix + "_" + name;
    C[name] = item;
  });
};

C.append(["admin", "user", "guest"], "ROLE");

C.append(["local", "twitter", "google", "facebook", "github", "linkedin"],
  "PROVIDER");

module.exports = C;
