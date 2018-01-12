const orders = [
  {
    id: 1,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
  {
    id: 2,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
  {
    id: 3,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
  {
    id: 4,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
  {
    id: 5,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
  {
    id: 6,
    name: 'ABC',
    date: new Date(),
    flights: 2
  },
]

export default function getData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orders);
    }, 300)
  })
}