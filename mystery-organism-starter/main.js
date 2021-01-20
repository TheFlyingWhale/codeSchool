// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const qAequorFactory = (num, arr) => {
   const newObject = {
    specimenNum: num,
    dna: arr,
    mutate: function () {
      const baseToChange = Math.floor(Math.random() * this.dna.length);
      let check = 0;
      while (check === 0) {
        const newBase = returnRandBase();
        if (this.dna[baseToChange] != newBase) {
          this.dna[baseToChange] = newBase;
          check = 1;
        }
      }
      return this.dna;
    },
    compareDNA: function(obj){

    }
  }
  return newObject;
}

const org = qAequorFactory(1, mockUpStrand());







