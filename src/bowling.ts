type Croute = Omit<{id: string, name: string},'id'>
const croute: Croute = {name: 'Yolo'}

export class Bowling {
  speak() {
    console.log('croute', croute);
  }
  getScore() {
    return 0
  }
}

const bowling = new Bowling()
bowling.speak()