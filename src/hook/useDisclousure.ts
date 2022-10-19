import { useState } from "react";

export const useDisclousure = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggle = () => setIsOpen((value) => !value);

	return {
        isOpen, toggle
    }

}