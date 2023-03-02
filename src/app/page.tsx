import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/ui/Button/Button";
import { Alert } from "./components/ui/Alert/Alert";
import { Badge } from "./components/ui/Badge/Badge";

export default function Home() {
	return (
		<main className="grid grid-cols-1 divide-y">
			<div className="bg-gray-200 p-4">
				<h1>Buttons</h1>
				<Button className="m-2">Button</Button>
				<Button className="m-2" intent="danger" size="xsmall">
					Button
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
					</span>
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
				<h1>Alerts</h1>
				<Alert>This is an alert</Alert>
				<Alert intent="secondary">This is an alert</Alert>
				<Alert intent="warning">This is an alert</Alert>
				<Alert intent="info">This is an alert</Alert>
				<Alert intent="danger">This is an alert</Alert>
			</div>
			<div className="bg-gray-200 p-4">
				<h1>Badges</h1>
				<Badge intent="secondary">Badge</Badge>
				<Badge intent="warning">Badge</Badge>
				<Badge intent="info">Badge</Badge>
				<Badge intent="danger">Badge</Badge>
			</div>
			<div className="bg-gray-200 p-4">
				<h1>Ping</h1>
				<span className="relative flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
				</span>
			</div>
		</main>
	);
}
