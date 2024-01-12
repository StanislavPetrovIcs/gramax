import IsEditService from "@core-ui/ContextServices/IsEdit";
import { useCtrlKey } from "@core-ui/hooks/useCtrlKey";
import { usePlatform } from "@core-ui/hooks/usePlatform";
import parseStorageUrl from "@core/utils/parseStorageUrl";
import { useRef, useEffect } from "react";

export const useCtrlKeyLinkHandler = () => {
	const { isCtrlPressed } = useCtrlKey();
	const { isTauri } = usePlatform();
	const modifiedLinks = useRef<Set<HTMLAnchorElement>>(new Set());
	const isEdit = IsEditService.value;

	const isExternalLink = (href) => !!parseStorageUrl(href)?.domain;

	useEffect(() => {
		if (!isTauri || !isEdit) return;

		const handleMouseMove = (event) => {
			const element = document.elementFromPoint(event.clientX, event.clientY) as HTMLAnchorElement;
			if (element && element.tagName === "A") {
				const href = element.getAttribute("href");
				const target = element.getAttribute("target");

				if (isExternalLink(href) && target === "_self") {
					element.setAttribute("target", "_blank");
					modifiedLinks.current.add(element);
				}
			}
		};

		if (isCtrlPressed) {
			document.addEventListener("mousemove", handleMouseMove);
		} else {
			modifiedLinks.current.forEach((link) => link.setAttribute("target", "_self"));
			modifiedLinks.current.clear();
		}

		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [isCtrlPressed, isTauri, isEdit]);
};
