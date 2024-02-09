<script>
	export let title;
</script>

<main class="bg-gray-100 h-screen overflow-hidden relative">
	<div
		class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row"
	>
		<div class="w-full md:w-6/12">
			<div class="shadow-lg w-full bg-white relative overflow-hidden">
				<a href="/" class="w-full h-full block">
					<div class="flex items-center justify-between px-4 py-6 space-x-4">
						<div class="flex items-center">
							<span class="rounded-full relative p-5 bg-yellow-100">
							
								<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.5 9.00011L10 12.0001H14L12.5 15.0001M20 12.0001C20 16.4612 14.54 19.6939 12.6414 20.6831C12.4361 20.7901 12.3334 20.8436 12.191 20.8713C12.08 20.8929 11.92 20.8929 11.809 20.8713C11.6666 20.8436 11.5639 20.7901 11.3586 20.6831C9.45996 19.6939 4 16.4612 4 12.0001V8.21772C4 7.4182 4 7.01845 4.13076 6.67482C4.24627 6.37126 4.43398 6.10039 4.67766 5.88564C4.9535 5.64255 5.3278 5.50219 6.0764 5.22146L11.4382 3.21079C11.6461 3.13283 11.75 3.09385 11.857 3.07839C11.9518 3.06469 12.0482 3.06469 12.143 3.07839C12.25 3.09385 12.3539 3.13283 12.5618 3.21079L17.9236 5.22146C18.6722 5.50219 19.0465 5.64255 19.3223 5.88564C19.566 6.10039 19.7537 6.37126 19.8692 6.67482C20 7.01845 20 7.4182 20 8.21772V12.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
							</span>
							<p
								class="text-sm text-gray-700 ml-2 font-semibold border-b border-gray-200"
							>
								{title}
							</p>
						</div>
						<div
							class="border-b border-gray-200 mt-6 md:mt-0 text-black font-bold text-xl"
						>
						75%
						
						</div>
					</div>
					<div class="w-full h-3 bg-gray-100">
						<div class="w-2/5 h-full text-center text-xs text-white bg-green-400" />
					</div>
				</a>
			</div>
		</div>
		<div class="flex items-center w-full md:w-1/2 space-x-4">
			<div class="w-1/2">
				<div class="shadow-lg px-4 py-6 w-full bg-white relative">
					<p class="text-2xl text-black font-bold">12</p>
					<p class="text-gray-400 text-sm">Open Connections</p>
				</div>
			</div>
			<div class="w-1/2">
				<div class="shadow-lg px-4 py-6 w-full bg-white relative">
					<p class="text-2xl text-black font-bold">10</p>
					<p class="text-gray-400 text-sm">Issues</p>
					<span class="rounded-full absolute p-4 bg-red-500 top-2 right-4">
						<svg fill="#000000" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
							<path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 0 0-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0 0 26 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 0 1-49.8 62.2A355.92 355.92 0 0 1 651.1 840a355 355 0 0 1-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 0 1-113.3-76.3A353.06 353.06 0 0 1 184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 0 1 138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 0 0 892 694z"/>
						  </svg>
					</span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					VPN Connections
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">12</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						22%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200"
					>
						<p>US</p>
						<div class="flex items-end text-xs">
							34
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								22%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Canada</p>
						<div class="flex items-end text-xs">
							13
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Europe</p>
						<div class="flex items-end text-xs">
							45
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								41%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					Average Sessions
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">23</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						12%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Daily</p>
						<div class="flex items-end text-xs">
							21
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								20%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Weekly</p>
						<div class="flex items-end text-xs">
							10
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								2%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Monthly</p>
						<div class="flex items-end text-xs">
							434
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					Connections
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">12</p>
					<span class="text-red-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3 rotate-180 transform"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						2%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Down</p>
						<div class="flex items-end text-xs">
							34
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								22%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Up</p>
						<div class="flex items-end text-xs">
							13
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>No developed</p>
						<div class="flex items-end text-xs">
							45
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								41%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					Antivirus Issues
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">16</p>
					<span class="text-red-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3 transform rotate-180"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						14%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>America</p>
						<div class="flex items-end text-xs">
							43
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Europe</p>
						<div class="flex items-end text-xs">
							133
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								19%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Asia</p>
						<div class="flex items-end text-xs">
							23
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								4%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					Devices
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">9</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						34%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Andriod</p>
						<div class="flex items-end text-xs">
							345
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>MacOs</p>
						<div class="flex items-end text-xs">
							139
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								10%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Ios</p>
						<div class="flex items-end text-xs">
							421
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								4%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p
					class="text-sm w-max text-gray-700 font-semibold border-b border-gray-200"
				>
					Maintenance
				</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl text-black font-bold">15</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						34%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Cloud</p>
						<div class="flex items-end text-xs">
							123
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								22%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Infra</p>
						<div class="flex items-end text-xs">
							134
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								9%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Office</p>
						<div class="flex items-end text-xs">
							23
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								41%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
