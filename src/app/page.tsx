import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/ui/Button/Button";
import { Alert } from "./components/ui/Alert/Alert";

export default function Home() {
	return (
		<main className="grid grid-cols-1 divide-y">
			<div className="bg-gray-200 p-4">
				<h1>Buttons</h1>
				<Button className="m-2">Button</Button>
				<Button className="m-2" intent="danger" size="xsmall">
					Button
				</Button>
				<Button className="m-2" intent="secondary" size="xsmall">
					Button
				</Button>
				<Button className="m-2" intent="success" size="small">
					Button
				</Button>
				<Button className="m-2" intent="danger" size="xsmall">
					<EnvelopeIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
					Button
				</Button>
				<Button fullWidth={true} intent="brand" size="medium">
					Button
				</Button>
			</div>
			<div className="bg-gray-200 p-4">
				<h1>Buttons</h1>
				<Alert>This is an alert</Alert>
				<Alert intent="secondary">This is an alert</Alert>
				<Alert intent="warning">This is an alert</Alert>
				<Alert intent="info">This is an alert</Alert>
				<Alert intent="danger">This is an alert</Alert>
			</div>
			<div className="bg-gray-200 p-4">
				<h1>Buttons</h1>
			</div>
		</main>
	);
}
