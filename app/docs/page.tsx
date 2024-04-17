import { title } from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import React from "react";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Docs</h1>
			<div className="max-w-md">
				{/*<div className="space-y-1">*/}
				{/*	<h4 className="text-medium font-medium">NextUI Components</h4>*/}
				{/*	<p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>*/}
				{/*</div>*/}
				{/*<Divider className="my-4"/>*/}
				<div className="flex h-5 items-center space-x-4 text-small">
					<div>Blog</div>
					<Divider orientation="vertical"/>
					<div>Docs</div>
					<Divider orientation="vertical"/>
					<div>Source</div>
				</div>
			</div>

		</div>
	);
}
