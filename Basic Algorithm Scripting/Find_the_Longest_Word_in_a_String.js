function findLongestWordLength(str) {
      str.split(' ')
     const splitedArray = str.split(' ').sort()
     let longest = 0
     splitedArray.map((str)=>{
          if( str.length > longest)
            longest = str.length
     })
      return longest;
    }
    
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))