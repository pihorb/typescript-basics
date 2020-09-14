function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault