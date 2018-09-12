/**
 * Created by jiachenpan on 16/11/18.
 */
// var _ = require('lodash')

export function formatString (key, num) {
  if (!num) {
    num = 10
  }

  let label = key
  if (key.length > num) {
    label = key.substring(0, num) + '...'
  }

  return label
}

export function getImageAbbrId (id) {
  console.log(1)
  id = id.split(':')[1]
  return formatString(id, 8)
}

export function getTagInfo (tag) {
  const info = {
    username: null,
    repository: null,
    tag: null
  }
  let index = tag.lastIndexOf('/')
  if (index > 0) {
    info.username = tag.slice(0, index)
  } else {
    index = -1
  }

  let left = tag.slice(index + 1, tag.length)
  left = left.split(':')
  info.repository = left[0]
  info.tag = left[1]
  return info
}
