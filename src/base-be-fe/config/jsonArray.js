
exports.customFormat = data => {
  // var spritesheetImageUrl = data.sprites[0].image
  // var sharedSelector = data.sprites
  //   .map(sprite => '.' + sprite.name)
  //   .join(', ')
  let itemImt = data.sprites.map((sprite, i) => {
    let f = i === 0 ? '' : ','
    return dli(`
          ${f}{ 
            "name": "${sprite.name}"
          }
        `)
  }).join('')
  itemImt = itemImt.substring(1)
  return '[' + itemImt + ']'
}

function dli(s) { // drop last indentation
  const lines = s.split('\n').filter(s => s.trim().length)
  const lastIndentLength = /^\s*/.exec(lines[lines.length - 1])[0].length
  return s
    .split('\n')
    .map(line => line.slice(lastIndentLength))
    .join('\n')
}
