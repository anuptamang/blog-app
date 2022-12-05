export const getExcerpt = (text: string, limitText: any) => {
  if (text.length > limitText) {
    text = text.substring(0, limitText) + '...'
    return text
  }
}
