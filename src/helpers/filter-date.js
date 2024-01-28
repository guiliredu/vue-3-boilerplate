import * as dayjs from 'dayjs'

export function dateFormat(date, format){
  return dayjs(date).format(format);
}
