'use client';

import * as React from 'react';
import { Heart, Info, Mail, Mic, Users, Shield } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavUser } from './nav-user';


const data = {
  navMain: [
    {
      title: 'Who We Are',
      url: '#',
      icon: Users,
      isActive: true,
      items: [
        {
          title: 'Our Vision and Mission',
          url: '/about-us/our-vision-and-mission',
        },
        { title: 'Our Founders', url: '/about-us/our-founders' },
        { title: 'Our Legacy', url: '/about-us/our-legacy' },
        { title: 'Our Team', url: '/about-us/our-team' },
        { title: 'Our Emeriti', url: '/about-us/our-emeriti' },
      ],
    },
    {
      title: 'What We Do',
      url: '#',
      icon: Info,
      isActive: true,
      items: [
        { title: 'Our Work Overview', url: '/our-work' },
        { title: 'Family Story', url: '/our-work/family-story' },
        { title: 'Household Library', url: '/our-work/household-library' },
        { title: 'Early Childhood', url: '/our-work/early-childhood' },
        {
          title: 'Conferences and Workshops',
          url: '/our-work/conferences-and-workshops',
        },
        {
          title: 'Publications and Presentations',
          url: '/our-work/publications-and-presentations',
        },
      ],
    },
    {
      title: 'Oral History',
      url: '#',
      icon: Mic,
      isActive: true,
      items: [
        { title: 'How it Works', url: '/oral-history/how-it-works' },
        { title: 'Get Started', url: '/oral-history/get-started' },
        { title: 'Archived Stories', url: '/oral-history/archived-stories' },
      ],
    },
  ],
  projects: [
    { name: 'Contact Us', url: '/contact-us', icon: Mail },
    {
      name: 'Donate',
      url: 'https://www.globalgiving.org/donate/33117/evergreen-education-foundation/',
      icon: Heart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  const [role, setRole] = React.useState<string | null>(null);



  const isAdmin = role === 'ADMIN';

  const navMainWithAdmin = React.useMemo(() => {
    if (!isAdmin) return data.navMain;
    return [
      ...data.navMain,
      {
        title: 'Admin',
        url: '#',
        icon: Shield,
        items: [
          // { title: 'Review Content', url: '/admin/review' },
          { title: 'Contacts', url: '/admin/contacts' },
        ],
      },
    ];
  }, [isAdmin]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <span className="text-lg font-semibold">Evergreen</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMainWithAdmin} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
