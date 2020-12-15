const words = ["rna e dna"];

const randomWord = () => {
  const wordIndex = Math.floor(Math.random() * words.length);

  return words[wordIndex];
};

export default randomWord;
