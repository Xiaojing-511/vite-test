/* eslint-disable */
function getActiveData(data, className) {
  for (let i = 0; i < data.sprites.length; i++) {
    let _data = data.sprites[i]
    if (_data.name === className) return _data
  }
  return null
}
exports.customFormat = data => {
  // function getActiveData(className) {
  //   for (let i = 0; i < data.sprites.length; i++) {
  //     let _data = data.sprites[i]
  //     if (_data.name === className) return _data
  //   }
  //   return null
  // }
  var spritesheetImageUrl = data.sprites[0].image
  // var sharedSelector = data.sprites
  //   .map(sprite => '.' + sprite.name)
  //   .join(', ')
  let _hover = ''
  let names = ''
  let itemImt = data.sprites.map((sprite) => {
    let { name, width, height, offset_x, offset_y } = sprite
    if (/@2x$/.test(name)) return null // 如果没有2倍图
    names += `,.${name}`
    let activeD = null
    if (!/-hover$/.test(name)) {
      activeD = getActiveData(data, `${name}-hover`)
      if (activeD) {
        return dli(`
        .${name} { 
          width: ${width}px; 
          height: ${height}px; 
          background-position: ${offset_x}px ${offset_y}px; 
          &:hover{background-position: ${activeD.offset_x}px ${activeD.offset_y}px }
        }
      `)
      }
    }
    return dli(`
          .${name} { 
            width: ${width}px; 
            height: ${height}px; 
            background-position: ${offset_x}px ${offset_y}px; 
          }
        `)
  }).join('')
  let comStr = dli(`
    ${names} { 
      display: inline-block;
      vertical-align: middle;
      background-image: url(${spritesheetImageUrl});
    }
  `)
  return comStr + _hover + itemImt
}

exports.customFormatRetina = data => {
  // function getActiveData(className) {
  //   for (let i = 0; i < data.sprites.length; i++) {
  //     let _data = data.sprites[i]
  //     if (_data.name === className) return _data
  //   }
  //   return null
  // }
  var spritesheetImageUrl = data.sprites[0].image

  let names = ''
  let _hover = ''
  let itemImt = data.sprites.map((sprite) => {
    let { name, width, height, offset_x, offset_y } = sprite

    if (/@2x$/.test(name)) return null // 如果没有2倍图
    names += `,.${name}`
    let activeD = null

    if (!/-hover$/.test(name)) {
      activeD = getActiveData(data, `${name}-hover`)
      // console.log(activeD);
      if (activeD) {
        return dli(`
        .${name} { 
          width: ${width}px; 
          height: ${height}px; 
          background-position: ${offset_x}px ${offset_y}px; 
          &:hover{background-position: ${activeD.offset_x}px ${activeD.offset_y}px }
        }
      `)
      }
    }

    return dli(`
          .${name} { 
            width: ${width}px; 
            height: ${height}px; 
            background-position: ${offset_x}px ${offset_y}px; 
          }
        `)
  }).join('')
  names = names.substring(1)

  let comStr = dli(`
  ${names} { 
    display: inline-block;
    vertical-align: middle;
    background-image: url(${spritesheetImageUrl});
  }
`)
  return comStr + itemImt + _hover + '\n' + dli(`
            @media (-webkit-min-device-pixel-ratio: 2),
              (min-resolution: 192dpi) {
                ${names} {
                  background-image: url(${data.retina_spritesheet.image});
                  background-size: ${data.spritesheet.width}px ${data.spritesheet.height}px;
                }
            }
        `)
}

function dli(s) { // drop last indentation
  const lines = s.split('\n').filter(s => s.trim().length)
  const lastIndentLength = /^\s*/.exec(lines[lines.length - 1])[0].length
  return s
    .split('\n')
    .map(line => line.slice(lastIndentLength))
    .join('\n')
}
