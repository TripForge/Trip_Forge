import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Add places from guides with 1 click',
    description:
      'We crawled the web so you don’t have to. Easily save mentioned places.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Flight and hotel reservations',
    description:
      'Book best flights and hotels for yourself and your loved ones.',
    icon: LockClosedIcon,
  },
  {
    name: 'Prioritized Authentication and Authorization',
    description:
      'Tripforge keeps your information to you. so, provides seamless and safe experience',
    icon: FingerPrintIcon,
  },
  {
    name: 'Set Remainder',
    description:
      'Book remainder for your trips and get notified on time.',
    icon: ArrowPathIcon,
  },
]

export default function index() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-semibold leading-7 text-indigo-600">Features to replace all your other tools</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            TripForge Provides lot of benefits to its users, so that the user have smooth and seamless experience while they are planning the trip or are already on the trip.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
