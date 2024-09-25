import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface UserPageProps {
	searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: UserPageProps) => {
	return (
		<>
			<h1>Users</h1>
			<Link href="/users/new" className="btn">
				New User
			</Link>
			<UserTable sortOrder={sortOrder} />
		</>
	);
};

export default UsersPage;
