// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //Construtor for the pAequor organism
  const pAequorFactory = (id, dnaBases) => {
    return {
      specimenNum: id,
      dna: dnaBases,
  
      mutate () {
        let newDna = this.dna;
        let randNum = Math.floor(Math.random() * newDna.length);
        let newBase;
        do{
          newBase = returnRandBase();
        }while(newDna[randNum] === newBase);
        if(newDna[randNum] !== newBase){
          newDna[randNum] = newBase;
        }    
        this.dna = newDna;
        return this.dna;
      }, 
  
      compareDNA (pAequor) {
        let inCommon = [];
        let count = 0;
        let percentage;
        for(let key = 0; key<this.dna.length; key++){
          if(this.dna[key] === pAequor.dna[key]){
            count++;
            inCommon.push(this.dna[key]);
            //checking the bases in common
            //console.log(inCommon);
          }
        }
        percentage = (count/this.dna.length)*100;
        return `${this.specimenNum} and ${pAequor.specimenNum} have ${percentage}% DNA in common`;
      },
  
      willLikelySurvive () {
        let cCount = this.dna.filter(num => num==='C').length;
        let gCount = this.dna.filter(num => num==='G').length;
  
        if(cCount === undefined){
          cCount = 0;
        }
        if(gCount === undefined){
          gCount = 0;
        }
       // console.log(cCount)
       // console.log(gCount)
  
        let cPercentage = (cCount/this.dna.length) * 100;
        let gPercentage = (gCount/this.dna.length) * 100;
        //console.log(cPercentage)
        //console.log(gPercentage)
  
        //Checking percentage of C or G being above 60
        if((cPercentage >= 60) || (gPercentage >= 60)){
          return true;
        }else{
          return false;
        }
      },
  
      //Function to return the complement of pAequor object
      complementStrand () {
        let complement = this.dna.map(base => {
          if(base === 'A'){
            return 'T';
          }else if(base === 'T'){
            return 'A';
          }else if(base === 'C'){
            return 'G';
          }else{
            return 'C';
            }
          }
         )
         return complement;
      },
  
    };
  }; 
  
  //Creating 30 instances of pAequor
  const instances30 = () => {
    let suvivors = [];
    let organism;
    let count = 1;
    while(suvivors.length<30){
      organism = pAequorFactory(count, mockUpStrand());
      if(organism.willLikelySurvive()){
        suvivors.push(organism);
      }
      count++;
    }
    return suvivors;
  };
  //testing the 30 instances function 
  //let squad = instances30();
  //console.log(squad);
  
  /*
  //testing the pAequorFunction and the compare function
  let org1 = pAequorFactory('Rez', mockUpStrand())
  let org2 = pAequorFactory('Rexx', mockUpStrand())
  //console.log(org1);
  //console.log(org1.mutate());
  */
  
  //Testing the pAequor objects 
  //console.log(org1.compareDNA(org2))
  
  //testing the willLikelySurvive function
  //console.log(org1.willLikelySurvive())
  
  /*
  //testing complement function
  let org3 = pAequorFactory('Rez', mockUpStrand())
  console.log(org3);
  console.log(org3.complementStrand());
  */
  
  
  
  