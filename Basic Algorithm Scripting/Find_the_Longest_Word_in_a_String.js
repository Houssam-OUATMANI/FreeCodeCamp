function findLongestWordLength(str) {
     const splitedArray = str.split(' ')
     let longest = 0
     
     splitedArray.forEach((str)=>{
          if( str.length > longest)
            longest = str.length
     })
      return longest
    }
    
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
