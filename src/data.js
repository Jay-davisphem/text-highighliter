const item =
  "Elinor Lee, a gangster's moll living in the Harlem section of New York City, has signed up-and-coming boxer Benny Blue to a 10-year contract. Lee and a pair of corrupt fight promoter scheme to build up Blue as a potential champion, with the goal of betting against him when they force him to take a dive in a champion fight. Lee conspires to hire Fredi, an old friend of Blue and an escaped convict hiding from the law, to be his sweetheart and to control him for Lee and her partners. The plans are derailed when Blue loses a key fight to a German boxer, but he works to regain his standing in the sport and is able to meet the German in a rematch after two years have passed.";
const item2 =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"';
const person = [
  "Elinor Leee",
  "Beniny Blue",
  "Leeeeeeeeee",
  "Blueeeeeeee",
  "Leeeeeeeeee",
  "Frediiiiiii",
  "Blueeeeeeee",
  "Leeeeeeeeee",
  "Blueeeeeeee",
  "Latin Liter",
  "Hampden Syd",
];
const org = ["New York Ci", "Lorem Ipsum", "Hampden Syd"];
let highlight = [];
for (let i of person) highlight.push({ name: i, type: "PERSON" });
for (let j of org) highlight.push({ name: j, type: "ORG" });
export const loadText = (n) => {
  n = n / 2;
  let list = [];
  for (let i = 0; i < n; ++i) list.push(item, item2);
  return list;
};
export const loadHighlight = () => {
  return highlight;
};
