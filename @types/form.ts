export default interface Form {
  name: string,
  emoji: {
    id: string,
    native: string
  }
  author: string,
  height: number,
  unit: string,
  id?: string
}