import React from "react";

const Form = ({ formData }) => {
	const renderField = (field) => {
		switch (field.type) {
			case "text":
			case "email":
			case "password":
				return (
					<div key={field.name} className="sm:col-span-6">
						<label htmlFor={field.name} className="block text-sm font-medium leading-5 text-gray-700">
							{field.label}
						</label>
						<div className="mt-1 relative rounded-md shadow-sm">
							<input type={field.type} name={field.name} id={field.name} className="form-input block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm sm:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" placeholder={field.placeholder} />
						</div>
						<p className="mt-2 text-sm text-gray-500" id="email-description">
							We&apos;ll only use this for spam.
						</p>
					</div>
				);
			case "textarea":
				return (
					<div key={field.name} className="sm:col-span-6">
						<label htmlFor={field.name} className="block text-sm font-medium leading-5 text-gray-700">
							{field.label}
						</label>
						<div className="mt-1 relative rounded-md shadow-sm">
							<textarea id={field.name} name={field.name} rows="4" className="form-textarea block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm sm:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" placeholder={field.placeholder}></textarea>
						</div>
					</div>
				);
			case "select":
				return (
					<div key={field.name} className="sm:col-span-6">
						<label htmlFor={field.name} className="block text-sm font-medium leading-5 text-gray-700">
							{field.label}
						</label>
						<div className="mt-1 relative rounded-md shadow-sm">
							<select id={field.name} name={field.name} className="form-select block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm sm:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10">
								{field.options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
					</div>
				);
			case "checkbox":
				return (
					<div key={field.name} className="sm:col-span-6">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input id={field.name} name={field.name} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
							</div>
							<div className="ml-3 text-sm leading-5">{field.label}</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<form className="space-y-8 divide-y divide-gray-200">
			<div className="space-y-8 divide-y divide-gray-200">
				<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">{formData.fields.map((field) => renderField(field))}</div>
			</div>
		</form>
	);
};

export default Form;
