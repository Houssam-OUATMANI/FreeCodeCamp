function factorialize(num) {
      
      if (num === 0){
        return 1
      }
   
         let num2 = num
   
         while(num > 1){
               num--
               num2 *=num 
         }
         return num2
       }
       
      console.log(factorialize(5));