import type React from 'react';
import { useState, type FormEvent } from 'react';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Footer() {
	const [input, setInput] = useState<string>('');
	const [hasError, setHasError] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const showError = hasError ? 'block' : 'hidden';

	function validate(value: string) {
		return value.match(emailRegex);
	}

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setHasError(false);
		setInput(e.target.value);
	}

	function handleOnBlur(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (validate(value)) {
			setInput(value);
		} else setHasError(true);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (validate(input)) {
			setIsSubmitted(true);
			console.log('success');
		} else setHasError(true);
	}

	if (isSubmitted) {
		return (
			<footer className='text-center space-y-3'>
				<h3 className='text-2xl'>We have received your information</h3>
				<p className='opacity-75'>
					Kick back and stay tuned. Thank you for supporting us!
				</p>
			</footer>
		);
	}

	return (
		<footer
			onSubmit={handleSubmit}
			className='flex flex-col items-center gap-8'
		>
			<h3 className='text-2xl'>Get notified when we launch</h3>
			<form className='space-x-4'>
				<label className='inline-flex flex-col gap-1'>
					<input
						type='text'
						placeholder='email@example.com'
						onChange={handleOnChange}
						onBlur={handleOnBlur}
						className='w-sm px-4 py-2 rounded-full bg-base-200'
					/>
					<p className={`ml-4 text-red-400 ${showError}`}>
						Please enter valid email address.
					</p>
				</label>

				<button
					type='submit'
					className='px-4 py-2 rounded-full bg-accent text-black'
				>
					Get notified
				</button>
			</form>
		</footer>
	);
}
