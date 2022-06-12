"use strict";

// Task 5
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика");
console.log(styles.shift());
styles.unshift("Реп", "Реггі");
console.log(styles);
