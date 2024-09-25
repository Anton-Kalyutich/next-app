'use client';

import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CldUploadResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicId, setPublicId] = useState('');

	return (
		<>
			{publicId && (
				<CldImage alt="Photo" src={publicId} width={270} height={180} />
			)}
			<CldUploadWidget
				onSuccess={(result, widget) => {
					if (result.event !== 'sucess') return;
					const info = result.info as CldUploadResult;
					setPublicId(info.public_id);
				}}
				uploadPreset="patieppg"
			>
				{({ open }) => (
					<button onClick={() => open()} className="btn btn-primary">
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
