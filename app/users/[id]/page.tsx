import { notFound } from 'next/navigation';
import React from 'react';

interface UserDetailProps {
	params: { id: number };
}

const UserDetailPage = ({ params: { id } }: UserDetailProps) => {
	if (id > 10) notFound();
  
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
