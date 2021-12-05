/**
 * Helper functions for customer pages */


export function truncateText(text, index){
  if(text){
    return text.length > index ? text.substring(0, (index - 3)) + '...' : text
  }
}


