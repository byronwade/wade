import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/ui/Button/Button";
import { Alert } from "./components/ui/Alert/Alert";
import { Badge } from "./components/ui/Badge/Badge";

export default function Home() {
	return (
		<main className="grid grid-cols-1 divide-y">
			<div className="p-4">
				<h1 className="text-black-1 font-black">Buttons</h1>
				<Button className="m-2 ml-0" color="black" marketing={true}>
					Find your domain
				</Button>
				<Button className="m-2" color="black">
					Button
				</Button>
				<Button className="m-2" color="white">
					Button
				</Button>
				<Button className="m-2" color="red">
					Button
				</Button>
				<Button className="m-2" color="brand">
					Button
				</Button>
				<Button className="m-2" color="green">
					Button
				</Button>
				<Button className="m-2" color="yellow">
					Button
				</Button>
				<Button className="m-2" color="blue">
					Button
				</Button>
				<Button className="m-2" color="red">
					<CheckCircleIcon className="-ml-0.5 mr-2 h-2.5 w-2.5" aria-hidden="true" />
					Button
				</Button>
				<Button fullWidth={true} color="brand" size="medium">
					Button
				</Button>
			</div>
			<div className="p-4">
				<h1>Alerts</h1>
				<Alert color="black">This is an alert</Alert>
				<Alert color="white">This is an alert</Alert>
				<Alert color="brand">This is an alert</Alert>
				<Alert color="green">This is an alert</Alert>
				<Alert color="yellow">This is an alert</Alert>
				<Alert color="blue">This is an alert</Alert>
				<Alert color="red">This is an alert</Alert>
			</div>
			<div className="p-4">
				<h1>Badges</h1>
				<Badge color="black">badge</Badge>
				<Badge color="white">badge</Badge>
				<Badge color="brand">badge</Badge>
				<Badge color="green">badge</Badge>
				<Badge color="yellow">badge</Badge>
				<Badge color="blue">badge</Badge>
				<Badge color="red">badge</Badge>
			</div>
			<div className="p-4">
				<h1>Ping</h1>
				<span className="relative flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
				</span>
			</div>
		</main>
	);
}
