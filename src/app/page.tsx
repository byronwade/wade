"use client";
import React, { useEffect } from "react";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/ui/Button/Button";
import { Alert } from "./components/ui/Alert/Alert";
import { Badge } from "./components/ui/Badge/Badge";
import { Header } from "./components/ui/Headers/Headers";
import { Banner } from "./components/ui/Banner/Banner";
import Form from "./components/ui/Form/Form";
import { Box } from "./components/ui/Box/Box";
import Link from "next/link";

export default function Home() {
	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const formData = {
		fields: [
			{
				type: "text",
				name: "full_name",
				label: "Full Name",
				placeholder: "Enter your full name",
			},
			{
				type: "email",
				name: "email",
				label: "Email Address",
				placeholder: "Enter your email address",
			},
			{
				type: "password",
				name: "password",
				label: "Password",
				placeholder: "Enter your password",
			},
			{
				type: "textarea",
				name: "message",
				label: "Message",
				placeholder: "Enter your message",
			},
			{
				type: "select",
				name: "country",
				label: "Country",
				options: [
					{ label: "USA", value: "usa" },
					{ label: "Canada", value: "canada" },
					{ label: "Mexico", value: "mexico" },
				],
			},
			{
				type: "checkbox",
				name: "subscribe",
				label: "Subscribe to newsletter",
			},
		],
	};

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-[200px]">
			<div className="grid grid-cols-1 divide-y">
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Example Landing Pages
					</Header>
					<div>
						<Button href="/one" className="m-2 p-0 underline" color="transparent" marketing={true}>
							One
						</Button>
					</div>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Headers
					</Header>
					<Header className="block mb-4 mt-8" color="black" size="large">
						This is a header for a website
					</Header>
					<Header className="block mb-4 mt-8" color="black" size="medium">
						This is a header for a website
					</Header>
					<Header className="block mb-4 mt-8" color="black" size="small">
						This is a header for a website
					</Header>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Marketing Buttons
					</Header>
					<div className="mx-auto flex items-center justify-start">
						<Button className="m-2 ml-0" color="black" marketing={true}>
							Find your domain
						</Button>
						<Button className="m-2" color="brand" marketing={true}>
							Find your domain
						</Button>
						<Button className="m-2" color="white" marketing={true}>
							Find your domain
						</Button>
						<Button className="m-2" color="transparent" marketing={true}>
							Find your domain
							<ChevronRightIcon className="ml-3 mt-0.5 h-5 w-5" aria-hidden="true" />
						</Button>
					</div>

					<Header className="block mb-4 mt-8" color="black" size="small">
						UI Buttons
					</Header>
					<div className="mx-auto flex items-center justify-start">
						<Button className="m-2 ml-0" color="black">
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
							<CheckCircleIcon className="-ml-0.5 mr-2 h-4 w-4 inline-block" aria-hidden="true" />
							Button
						</Button>
					</div>

					<Header className="block mb-4 mt-8" color="black" size="small">
						Button Full Width
					</Header>
					<div className="mx-auto items-center justify-start">
						<Button className="mb-4" fullWidth={true} color="brand" size="medium">
							Button
						</Button>
						<Button className="mb-4" fullWidth={true} marketing={true} color="red">
							Button
						</Button>
					</div>

					<Header className="block mb-4 mt-8" color="black" size="small">
						Button Status (Error, Warning, Loading, and Disabled Buttons)
					</Header>
					<div className="mx-auto flex items-center justify-start">
						<Button className="m-2 ml-0" status="error">
							This is an error
						</Button>
						<Button className="m-2" status="warning">
							This is a warning, proceed?
						</Button>
						<Button className="m-2" status="success">
							Successful
						</Button>
						<Button className="m-2" status="loading">
							Loading...
						</Button>
						<Button className="m-2" status="disabled" color="blue">
							This button is disabled
						</Button>
					</div>

					<Header className="block mb-4 mt-8" color="black" size="small">
						Marketing Button Status (Error, Warning, Loading, and Disabled Buttons)
					</Header>
					<div className="mx-auto flex items-center justify-start">
						<Button className="m-2" status="loading" color="red" marketing={true}>
							Marketing button loading...
						</Button>
						<Button className="m-2" status="disabled" color="red" marketing={true}>
							Marketing button disabled
						</Button>
					</div>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Alerts
					</Header>
					<Alert className="mb-4" color="black">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="white">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="brand">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="green">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="yellow">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="blue">
						This is an alert
					</Alert>
					<Alert className="mb-4" color="red">
						This is an alert
					</Alert>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Banners
					</Header>
					<Banner className="mb-4" color="black">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="white">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="brand">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="green">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="yellow">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="blue">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
					<Banner className="mb-4" color="red">
						<p className="text-sm leading-6">
							<a href="#">
								<strong className="font-semibold">GeneriCon 2023</strong>
								<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
									<circle cx={1} cy={1} r={1} />
								</svg>
								Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
							</a>
						</p>
					</Banner>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Badges
					</Header>
					<Badge className="mr-4" color="black">
						badge
					</Badge>
					<Badge className="mr-4" color="white">
						badge
					</Badge>
					<Badge className="mr-4" color="brand">
						badge
					</Badge>
					<Badge className="mr-4" color="green">
						badge
					</Badge>
					<Badge className="mr-4" color="yellow">
						badge
					</Badge>
					<Badge className="mr-4" color="blue">
						badge
					</Badge>
					<Badge className="mr-4" color="red">
						badge
					</Badge>

					<Header className="block mb-4 mt-8" color="black" size="small">
						Badges Counts
					</Header>
					<Badge className="mr-4" color="red">
						1
					</Badge>
					<Badge className="mr-4" color="red">
						1000
					</Badge>

					<Header className="block mb-4 mt-8" color="black" size="small">
						Badges Rounded
					</Header>
					<Badge className="mr-4 rounded-full py-1" color="red">
						1
					</Badge>
					<Badge className="mr-4 rounded-full py-1" color="red">
						1000
					</Badge>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Box
					</Header>
					<Box className="mb-4" color="black" size="medium">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="white" size="medium">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="brand" size="medium">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="blue" size="medium">
						This is a box for some content
					</Box>
					<Header className="block mb-4 mt-8" color="black" size="small">
						Box Sizes
					</Header>
					<Box className="mb-4" color="black" size="none">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="white" size="xsmall">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="brand" size="small">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="red" size="medium">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="blue" size="large">
						This is a box for some content
					</Box>
					<Box className="mb-4" color="green" size="xlarge">
						This is a box for some content
					</Box>
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Form
					</Header>
					<Form formData={formData} />
				</div>
				<div className="p-4">
					<Header className="block mb-4 mt-8" color="black" size="small">
						Ping
					</Header>
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
					</span>
				</div>
			</div>
		</div>
	);
}
