import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Devices',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Add New Device',
				link: '/documents/taxes'
			},
			{
				title: 'My Devices',
				link: '/documents/taxes'
			},
		
		]
	},
	{
		section: 'Messages',
		icon: MessagesIcon,
		content: [
			{
				title: 'Unbox',
				link: '/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/messages/unread'
			},
			{
				title: 'Archived',
				link: '/messages/archived'
			}
		]
	},

	{
		section: 'Statistics',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Connections',
				link: '/statistics/finances'
			},
		
		]
	},
	{
		section: 'Configuration',
		icon: EventsIcon,
		content: [
			{
				title: 'Application Tunneling',
				link: '/events/weddings'
			},
			{
				title: 'Manuel Setup',
				link: '/events/networking'
			},
			{
				title: 'Reset Configuration',
				link: '/events/networking'
			},
			{
				title: 'VPN not working',
				link: '/events/networking'
			}

		]
	},
	{
		section: 'Settings',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/guides/documentation'
			},
			{
				title: 'About',
				link: '/guides/documentation'
			}
		]
	}
];

