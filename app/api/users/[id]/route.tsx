import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface Props {
	params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
	const user = await prisma.user.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	if (!user) {
		return NextResponse.json(
			{ error: 'User Not Found' },
			{
				status: 404,
			}
		);
	}
	return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	const body = await request.json();
	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	if (id > 10) {
		return NextResponse.json({ error: 'User Not Found' }, { status: 404 });
	}
	return NextResponse.json({ id: 1, name: 'Antonio' });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
	if (id > 10) {
		return NextResponse.json({ error: 'User Not Found' }, { status: 404 });
	}
	return NextResponse.json({});
}
