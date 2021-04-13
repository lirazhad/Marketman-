export interface ReducerAction {
  type: string,
  payload: any
}

export interface Name {
  title: string,
  first: string,
  last: string
}

export interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}

export interface User {
  gender: string,
  name: Name,
  email: string,
  picture: Picture
}

export interface Users {
  maleArray: User[],
  femaleArray: User[]
}