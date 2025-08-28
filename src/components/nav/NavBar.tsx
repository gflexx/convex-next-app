import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className="w-full h-14 px-4 border-b shadow-sm bg-background flex items-center">
			<div className="flex items-center w-full justify-between">
				<div className="flex items-center gap-x-4">
					<Link href="/">
						<h1 className="font-semibold text-xl">Todo app</h1>
					</Link>
				</div>
			</div>
		</nav>
  )
}

export default NavBar