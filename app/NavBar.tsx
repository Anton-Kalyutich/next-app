'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const NavBar = () => {
	const { status, data: session } = useSession();

	return (
		<div className="flex bg-slate-200 p-3 space-x-3">
			<Link href="/" className="mr-5">
				Next.js
			</Link>
			<Link href="/users">Users</Link>
			{status === 'loading' && <div>Loading...</div>}
			{status === 'authenticated' && (
				<div>
					{session.user!.name}
					<Link className="ml-3" href="/api/auth/signout">
						Sign Out
					</Link>
				</div>
			)}
			{status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
		</div>
	);
};

export default NavBar;
