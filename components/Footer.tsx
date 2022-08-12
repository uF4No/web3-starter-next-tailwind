import { FC } from 'react'

import Image from 'next/image'

const Footer: FC<{ }> = () => {

	return (
  <footer className="h-12 text-right p-4">
    <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
  </footer>
  )
}

export default Footer
