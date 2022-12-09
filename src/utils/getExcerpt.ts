export const getExcerpt = (text: string, limitText: number) => {
  if (text.length > limitText) {
    text = text.substring(0, limitText) + '...'
    return text
  }
}
