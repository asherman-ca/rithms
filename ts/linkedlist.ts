class GeoCachePosition {
	private nextLocation: GeoCachePosition | null
	private value: string

	constructor(nextLocation: GeoCachePosition | null, value: string) {
		this.nextLocation = nextLocation
		this.value = value
	}

	public getNextLocation(): GeoCachePosition | null {
		return this.nextLocation
	}

	public setNextLocation(newNextLocation: GeoCachePosition | null): void {
		this.nextLocation = newNextLocation
	}

	public printValue(): void {
		console.log(this.value)
	}
}

class GeoCacheHunt {
	private start: GeoCachePosition | null

	constructor(start: GeoCachePosition | null) {
		this.start = start
	}

	public getStart(): GeoCachePosition | null {
		return this.start
	}

	public setStart(newStart: GeoCachePosition | null): void {
		this.start = newStart
	}

	// public reverseHunt(){
	//   // traverse list
	//   let current = this.getStart()
	//   let previous = null

	//   while (current){
	//       let next = current.getNextLocation()
	//       // let nextStep = current.getNextLocation()
	//       current.setNextLocation(previous)
	//       previous = current
	//       current = next
	//       // current = nextStep
	//   }

	// }

	public reverseHunt(): void {
		let curr = this.getStart()
		let prev: GeoCachePosition | null = null
		let next

		while (curr !== null) {
			next = curr.getNextLocation()
			curr.setNextLocation(prev)
			prev = curr
			curr = next
		}

		this.setStart(prev)
	}

	public printHunt() {
		let current = this.getStart()

		while (current) {
			current.printValue()
			current = current.getNextLocation()
		}
	}
}

const fifthPosition = new GeoCachePosition(null, '5')
const fourthPosition = new GeoCachePosition(fifthPosition, '4')
const thirdPosition = new GeoCachePosition(fourthPosition, '7')
const secondPosition = new GeoCachePosition(thirdPosition, '2')
const firstPosition = new GeoCachePosition(secondPosition, '1')

const geoHunt = new GeoCacheHunt(firstPosition)
geoHunt.reverseHunt()
geoHunt.printHunt()
