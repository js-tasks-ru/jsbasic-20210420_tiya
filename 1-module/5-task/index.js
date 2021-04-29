function truncate(str, maxlength) {
  let dots = "…"
  if (str.length > maxlength) {
    let s_str = str.substring(0, maxlength - 1)
    return s_str + dots
  }
  return str
}
