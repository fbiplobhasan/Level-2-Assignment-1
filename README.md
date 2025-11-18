## ব্লগ–১: TypeScript-এ Interface এবং Type এর পার্থক্য

TypeScript এ interface এবং type — দেখতে একইরকম মনে হলেও, দুটির মাঝে গুরুত্বপূর্ণ পার্থক্য আছে। নিচে সহজভাবে ব্যাখ্যা করা হলো।

###১. Extending করার পার্থক্য
Interface → extend করা যায়
interface User {
name: string;
age: number;
}

interface Admin extends User {
role: string;
}

Type → intersection দিয়ে বড় করা হয়
type User = {
name: string;
age: number;
};

type Admin = User & {
role: string;
};

###২. Interface re-open করা যায় (Declaration Merging)

একই interface বারবার লিখে property যোগ করা যায়।

interface User {
name: string;
}

interface User {
age: number;
}

এখন User হবে:

{ name: string; age: number }

📌 Type-এ এই সুবিধা নেই।
একবার declare করলে আবার declare করা যায় না।

###৩. Type আরো flexible

Type বিভিন্ন কাজ করতে পারে:

primitive type

union

tuple

function type

type Status = "success" | "error";
type Point = [number, number];

📌 এগুলো interface দিয়ে করা যায় না।

###৪. Object structure এর জন্য Interface সেরা

যখন শুধুমাত্র object-এর shape define করতে হয়, তখন interface ব্যবহারই সবচেয়ে ভালো।

## ব্লগ–২: TypeScript-এ any, unknown এবং never এর পার্থক্য

TypeScript-এর সবচেয়ে confusing তিনটি টাইপ হলো — any, unknown, এবং never।
প্রতিটির কাজ সম্পূর্ণ আলাদা।

###১. any → “সব allow, কোনো চেক নেই”

TypeScript-এর সব type checking বন্ধ করে দেয়।

let value: any = "Hello";
value = 10;
value = true;

📌 Very Dangerous → কারণ ভুল হলেও error দেখাবে না।

###২. unknown → “assign করা যায়, but ব্যবহার করতে চেক লাগে”
let data: unknown;

data = "Hi";
data = 20;
data = true;

ব্যবহার করতে গেলে অবশ্যই টাইপ চেক করতে হবে:

if (typeof data === "string") {
console.log(data.toUpperCase());
}

📌 unknown = safer alternative to any

###৩. never → "যা কখনো return করবে না"
❗ Error throw করলে
function throwError(msg: string): never {
throw new Error(msg);
}

❗ Infinite loop হলে
function loopForever(): never {
while (true) {}
}

📌 এই ফাংশনগুলো কখনোই শেষ হয় না, তাই return type = never.
