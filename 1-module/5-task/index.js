let dots = "…"

function truncate(str, maxlength) {

  if (str.length > maxlength) {
    return str.substring(0, maxlength-1) + dots
  }
    return str[0].toUpperCase() + str.substring(1)
}
