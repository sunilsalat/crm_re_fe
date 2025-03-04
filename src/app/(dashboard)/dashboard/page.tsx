"use client"

// import { Metadata } from 'next';
import Image from 'next/image';

import { DatePicker } from '@/_components/date-picker/DatePicker';
import { MainNav } from '@/_components/component/main-nav';
import { Search } from '@/_components/component/search';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/_components/ui/card';
import { Overview } from '@/_components/component/overview';
import { RecentSales } from '@/_components/component/recent-sales';
import { UserNav } from '@/_components/component/user-nav';
import { Suspense, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Example dashboard app built using the _components.',
// };

const page = () => {

  const [dataFromChild, setDataFromChild] = useState<string | null>(null);

  const handleDateForLeadData = (data:string | null) => {
    setDataFromChild(data);
  };

  console.log(dataFromChild,"dataFromChild")


  return (
    <>
      <Suspense fallback={<>Loading........</>}>
        <section>
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2"></div>
          </div>

          <>
            <div className="flex-col md:flex">
              <div className="border-b">
                <div className="flex h-16 items-center px-4">
                  <MainNav className="" />
                  <div className="ml-auto hidden items-center  space-x-4 md:flex">
                    <Search />
                    <UserNav />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics" disabled>
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="reports" disabled>
                      Reports
                    </TabsTrigger>
                    <TabsTrigger value="notifications" disabled>
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Revenue
                          </CardTitle>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$45,231.89</div>
                          <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Subscriptions
                          </CardTitle>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+2350</div>
                          <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Sales
                          </CardTitle>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <path d="M2 10h20" />
                          </svg>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+12,234</div>
                          <p className="text-xs text-muted-foreground">
                            +19% from last month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Active Now
                          </CardTitle>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+573</div>
                          <p className="text-xs text-muted-foreground">
                            +201 since last hour
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-7">
                      <Card className="col-span-3 mb-4 w-full overflow-y-auto md:mb-0">
                        <CardHeader>
                          <CardTitle>Recent Leads</CardTitle>
                          <CardDescription>
                            You made 265 Leads this month.
                          </CardDescription>
                        </CardHeader>

                        <div className="mb-6 w-full px-4">
                          <DatePicker handleDate={handleDateForLeadData} />
                        </div>

                        <CardContent className="w-full">
                          <RecentSales />
                        </CardContent>
                      </Card>

                      <Card className="col-span-4 h-fit overflow-hidden">
                        <CardHeader>
                          <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                          <Overview />
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </>
        </section>
      </Suspense>
    </>
  );
};

export default page;
