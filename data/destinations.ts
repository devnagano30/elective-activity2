export interface Destination {
  id: number
  name: string
  location: string
  category: string
  description: string
  image: string
  /** Intrinsic size of the source photo, used to reserve layout space. */
  width: number
  height: number
  /** Pre-generated responsive variant widths that exist in /public/images. */
  widths: number[]
  highlights: string[]
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Balungao Hot Spring',
    location: 'Balungao, Pangasinan',
    category: 'Nature & Wellness',
    description: 'A popular destination at Mt. Balungao featuring hot and cold spring pools surrounded by the lush landscape of an extinct volcano.',
    image: '/images/balungao.jpg',
    width: 768,
    height: 432,
    widths: [400, 480, 600, 768],
    highlights: ['Hot and cold spring pools', 'Mt. Balungao scenery', 'Nature and recreation']
  },
  {
    id: 2,
    name: 'Hundred Islands',
    location: 'Alaminos City, Pangasinan',
    category: 'Natural Heritage',
    description: 'A famous Pangasinan destination made up of numerous islands and islets in Lingayen Gulf, known for island hopping and scenic coastal views.',
    image: '/images/hundred-islands.jpg',
    width: 900,
    height: 600,
    widths: [400, 480, 600, 800, 900],
    highlights: ['Island hopping', 'Boat tours', 'Scenic viewpoints']
  },
  {
    id: 3,
    name: 'Cape Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    category: 'Heritage Landmark',
    description: 'A historic coastal lighthouse at Punta Piedra Point in Patar, Bolinao, overlooking the surrounding coastline and sea.',
    image: '/images/bolinao.jpg',
    width: 1600,
    height: 1110,
    widths: [400, 480, 600, 800, 1200],
    highlights: ['Historic lighthouse', 'Coastal scenery', 'Photography spot']
  }
]

export function getDestination(id: number) {
  return destinations.find(destination => destination.id === id)
}
