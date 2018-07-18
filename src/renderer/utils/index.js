/**
 * Created by jiachenpan on 16/11/18.
 */

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
