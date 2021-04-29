function ucFirst(str) {
  
  if (str === '') { return '' }
    
  let F_L = str[0]
    F_L = F_L.toUpperCase()
  let s_str = str.substring(1)
    
  return F_L + s_str
}