module.exports = function toReadable (number) {
    let result = '';
    const teenth = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
                    'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
  if(number>=0 && number <20) {
        result += `${teenth[number]}`
    } else if (number>=20 && number <100) {
        result += `${tens[Math.floor(number%100/10)-2]} ${number%10!=0 ? teenth[Math.floor(number%10)]:''}`
    } else if(number>=100 && number <1000) {
      
         result += `${teenth[Math.floor(number/100)]} hundred ` 
        
         if(number%100 < 20) {
           result += `${teenth[Math.floor(number%100)]}`
        } else  {
           result += `${tens[Math.floor(number%100/10)-2]} ${number%10!=0? teenth[number%10]: ''}`
        } 
      
      if(number%100 === 0) {
        return `${teenth[Math.floor(number/100)]} hundred`
      }
      
  
    } 
  
    
    
    return result.trim('');
    
}
