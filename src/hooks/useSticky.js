import { useEffect, useRef, useState } from 'react';

const useSticky = () => {
	const stickyRef = useRef(null);
	const [sticky, setSticky] = useState(false);
	const [offset, setOffset] = useState(0);

	// measure vertical offset of element we want to fix to top after its scrolled past
	useEffect(() => {
		if (!stickyRef.current) {
			return;
		}
		setOffset(stickyRef.current.offsetTop);
	}, [stickyRef, setOffset]);

	// listens for scroll events & determines if we have scrolled past the elements top edge, causing it to become sticky
	useEffect(() => {
		const handleScroll = () => {
			if (!stickyRef.current) {
				return;
			}

			setSticky(window.scrollY > offset);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setSticky, stickyRef, offset]);
	return { stickyRef, sticky };
};

export default useSticky;
