import React, { useState } from 'react';
// Import Recharts components needed for the embedded demos
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
// Import Lucide React icons
import { LayoutDashboard, Mail, Calendar, TrendingUp, Users, Workflow } from 'lucide-react';

// --- CONSOLIDATED DEMO COMPONENTS ---

// BusinessDashboard Component
const BusinessDashboard = () => {
  const mockDashboardData = {
    metrics: {
      upcomingEvents: 5,
      monthlyRevenue: 12500,
      revenueChange: 12, // percentage change
      customerSignups: 87,
      signupsChange: 20, // percentage change
      newsletterOpenRate: 38, // percentage
    },
    revenueData: [
      { name: 'Jan', revenue: 8000 },
      { name: 'Feb', revenue: 8500 },
      { name: 'Mar', revenue: 9200 },
      { name: 'Apr', revenue: 10500 },
      { name: 'May', revenue: 11000 },
      { name: 'Jun', revenue: 12500 },
      { name: 'Jul', revenue: 13000 },
      { name: 'Aug', revenue: 13500 },
      { name: 'Sep', revenue: 14000 },
      { name: 'Oct', revenue: 14200 },
      { name: 'Nov', revenue: 14500 },
      { name: 'Dec', revenue: 15000 },
    ],
    signupData: [
      { name: 'Week 1', signups: 15 },
      { name: 'Week 2', signups: 22 },
      { name: 'Week 3', signups: 28 },
      { name: 'Week 4', signups: 22 },
      { name: 'Week 5', signups: 30 },
      { name: 'Week 6', signups: 25 },
      { name: 'Week 7', signups: 35 },
      { name: 'Week 8', signups: 29 },
    ],
    recentActivity: [
      { id: 1, type: 'New Signup', detail: 'Jane Doe just joined!', time: '2 mins ago' },
      { id: 2, type: 'Event Booked', detail: 'Yoga Class for next Monday', time: '1 hour ago' },
      { id: 3, type: 'New Enquiry', detail: 'Website contact form submission', time: '3 hours ago' },
      { id: 4, type: 'Newsletter Sent', detail: 'Weekly digest campaign', time: '1 day ago' },
      { id: 5, type: 'New Signup', detail: 'John Smith joined!', time: '1 day ago' },
    ],
    upcomingEventsList: [
      { id: 1, name: 'Marketing Workshop', date: 'July 29', time: '10:00 AM' },
      { id: 2, name: 'Client Onboarding Call', date: 'July 30', time: '2:00 PM' },
      { id: 3, name: 'Team Meeting', date: 'August 1', time: '9:00 AM' },
      { id: 4, name: 'Product Brainstorm', date: 'August 2', time: '11:00 AM' },
    ]
  };

  const { metrics, revenueData, signupData, recentActivity, upcomingEventsList } = mockDashboardData;

  const formatCurrency = (value) => `$${value.toLocaleString()}`;
  const formatPercentage = (value) => `${value}%`;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Your Business Overview Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Upcoming Events</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{metrics.upcomingEvents}</p>
            <p className="text-sm text-gray-600">in the next 7 days</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
            <p className="text-3xl font-extrabold text-gray-900 mt-1">{formatCurrency(metrics.monthlyRevenue)}</p>
            <p className={`text-sm ${metrics.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
              {metrics.revenueChange >= 0 ? (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 01-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              )}
              {formatPercentage(Math.abs(metrics.revenueChange))} from last month
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Customer Signups</p>
            <p className="text-3xl font-extrabold text-gray-900 mt-1">{metrics.customerSignups}</p>
            <p className={`text-sm ${metrics.signupsChange >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
              {metrics.signupsChange >= 0 ? (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 01-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              )}
              {formatPercentage(Math.abs(metrics.signupsChange))} this week
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Newsletter Open Rate</p>
            <p className="text-3xl font-extrabold text-teal-600 mt-1">{metrics.newsletterOpenRate}</p>
            <p className="text-sm text-gray-600">Average across campaigns</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={formatCurrency} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => formatCurrency(value)}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">New Customer Signups</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={signupData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                />
                <Bar dataKey="signups" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="divide-y divide-gray-200">
              {recentActivity.map(activity => (
                <li key={activity.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-600">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <ul className="divide-y divide-gray-200">
              {upcomingEventsList.map(event => (
                <li key={event.id} className="py-3">
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// NewsletterCampaignTracker Component
const NewsletterCampaignTracker = () => {
  const mockNewsletterData = {
    summaryMetrics: {
      totalSubscribers: 5230,
      avgOpenRate: 28.5, // percentage
      avgClickRate: 4.2, // percentage
      emailsSentThisMonth: 12450,
    },
    subscriberGrowthData: [
      { month: 'Jan', subscribers: 4500 },
      { month: 'Feb', subscribers: 4650 },
      { month: 'Mar', subscribers: 4800 },
      { month: 'Apr', subscribers: 4950 },
      { month: 'May', subscribers: 5100 },
      { month: 'Jun', subscribers: 5230 },
      { month: 'Jul', subscribers: 5350 },
      { month: 'Aug', subscribers: 5480 },
      { month: 'Sep', subscribers: 5600 },
      { month: 'Oct', subscribers: 5750 },
      { month: 'Nov', subscribers: 5900 },
      { month: 'Dec', subscribers: 6050 },
    ],
    campaignPerformanceData: [
      { name: 'Welcome Series', openRate: 45, clickRate: 8.5 },
      { name: 'Summer Sale Promo', openRate: 32, clickRate: 5.1 },
      { name: 'Monthly Digest - Jul', openRate: 28, clickRate: 3.9 },
      { name: 'New Product Launch', openRate: 38, clickRate: 6.2 },
      { name: 'Webinar Invite', openRate: 25, clickRate: 2.8 },
    ],
    topPerformingCampaigns: [
      { id: 1, name: 'Welcome Series', sentDate: '2025-01-15', openRate: 45, clickRate: 8.5, emailsSent: 1500 },
      { id: 2, name: 'New Product Launch', sentDate: '2025-06-01', openRate: 38, clickRate: 6.2, emailsSent: 2500 },
      { id: 3, name: 'Summer Sale Promo', sentDate: '2025-05-20', openRate: 32, clickRate: 5.1, emailsSent: 3000 },
    ],
  };

  const { summaryMetrics, subscriberGrowthData, campaignPerformanceData, topPerformingCampaigns } = mockNewsletterData;

  const formatNumber = (value) => value.toLocaleString();
  const formatPercentage = (value) => `${value}%`;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Email Marketing Performance
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Total Subscribers</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatNumber(summaryMetrics.totalSubscribers)}</p>
            <p className="text-sm text-gray-600">Current count</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Avg. Open Rate</p>
            <p className="text-3xl font-extrabold text-green-600 mt-1">{formatPercentage(summaryMetrics.avgOpenRate)}</p>
            <p className="text-sm text-gray-600">Across all campaigns</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Avg. Click Rate</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatPercentage(summaryMetrics.avgClickRate)}</p>
            <p className="text-sm text-gray-600">Across all campaigns</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Emails Sent (This Month)</p>
            <p className="text-3xl font-extrabold text-teal-600 mt-1">{formatNumber(summaryMetrics.emailsSentThisMonth)}</p>
            <p className="text-sm text-gray-600">Total volume</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Subscriber Growth Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={subscriberGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={formatNumber} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => formatNumber(value)}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Line type="monotone" dataKey="subscribers" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Campaign Open/Click Rates</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignPerformanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#6b7280" angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="#6b7280" tickFormatter={formatPercentage} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => formatPercentage(value)}
                />
                <Legend />
                <Bar dataKey="openRate" fill="#82ca9d" name="Open Rate" barSize={15} radius={[5, 5, 0, 0]} />
                <Bar dataKey="clickRate" fill="#8884d8" name="Click Rate" barSize={15} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Campaigns</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                    Campaign Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sent Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Open Rate
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                    Click Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topPerformingCampaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {campaign.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {campaign.sentDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatPercentage(campaign.openRate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatPercentage(campaign.clickRate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Next Campaign Planner</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Campaign Idea (e.g., Autumn Collection Launch)"
              className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 shadow-sm"
              aria-label="Campaign Idea"
            />
            <input
              type="date"
              className="p-3 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 shadow-sm"
              aria-label="Planned Send Date"
            />
            <button
              onClick={() => alert('Demo: Campaign added to planner! (No real functionality)')}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-150"
            >
              Add to Planner
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// BookingsEventOverview Component
const BookingsEventOverview = () => {
  const mockBookingsData = {
    summaryMetrics: {
      slotsFilledPercentage: 78,
      totalBookingsThisMonth: 45,
      averageBookingDuration: 60, // minutes
    },
    upcomingBookings: [
      { id: 1, name: 'Yoga Session', client: 'Jane Doe', date: 'July 29', time: '10:00 AM', status: 'Confirmed' },
      { id: 2, name: 'Wedding Consultation', client: 'Smith & Jones', date: 'July 29', time: '2:30 PM', status: 'Confirmed' },
      { id: 3, name: 'Personal Training', client: 'Mark Johnson', date: 'July 30', time: '9:00 AM', status: 'Confirmed' },
      { id: 4, name: 'Marketing Strategy Call', client: 'ABC Corp', date: 'July 30', time: '1:00 PM', status: 'Confirmed' },
      { id: 5, name: 'Photography Shoot', client: 'Emily White', date: 'August 1', time: '3:00 PM', status: 'Pending' },
      { id: 6, name: 'Dental Check-up', client: 'David Lee', date: 'August 2', time: '11:00 AM', status: 'Confirmed' },
    ],
    busyHoursData: [
      { hour: '9 AM', Mon: 2, Tue: 3, Wed: 1, Thu: 2, Fri: 4 },
      { hour: '10 AM', Mon: 3, Tue: 4, Wed: 2, Thu: 3, Fri: 5 },
      { hour: '11 AM', Mon: 2, Tue: 2, Wed: 3, Thu: 4, Fri: 3 },
      { hour: '12 PM', Mon: 1, Tue: 1, Wed: 2, Thu: 2, Fri: 2 },
      { hour: '1 PM', Mon: 2, Tue: 3, Wed: 1, Thu: 2, Fri: 3 },
      { hour: '2 PM', Mon: 3, Tue: 4, Wed: 2, Thu: 3, Fri: 4 },
      { hour: '3 PM', Mon: 4, Tue: 3, Wed: 3, Thu: 4, Fri: 5 },
      { hour: '4 PM', Mon: 2, Tue: 2, Wed: 1, Thu: 3, Fri: 2 },
    ],
    calendarDays: [
      { date: '28', day: 'Mon', bookings: [{ time: '10:00', event: 'Yoga' }, { time: '14:30', event: 'Wedding' }] },
      { date: '29', day: 'Tue', bookings: [{ time: '09:00', event: 'PT' }, { time: '13:00', event: 'Call' }] },
      { date: '30', day: 'Wed', bookings: [] },
      { date: '31', day: 'Thu', bookings: [] },
      { date: '01', day: 'Fri', bookings: [{ time: '15:00', event: 'Photo' }] },
      { date: '02', day: 'Sat', bookings: [{ time: '11:00', event: 'Dental' }] },
      { date: '03', day: 'Sun', bookings: [] },
    ]
  };

  const { summaryMetrics, upcomingBookings, busyHoursData, calendarDays } = mockBookingsData;

  const formatPercentage = (value) => `${value}%`;

  const getHeatmapColor = (value) => {
    if (value >= 4) return 'bg-red-500';
    if (value >= 3) return 'bg-orange-400';
    if (value >= 2) return 'bg-yellow-300';
    if (value >= 1) return 'bg-blue-200';
    return 'bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Bookings & Event Management
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Slots Filled This Month</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatPercentage(summaryMetrics.slotsFilledPercentage)}</p>
            <p className="text-sm text-gray-600">Based on available capacity</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Total Bookings (This Month)</p>
            <p className="text-3xl font-extrabold text-green-600 mt-1">{summaryMetrics.totalBookingsThisMonth}</p>
            <p className="text-sm text-gray-600">Confirmed & Pending</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Average Booking Duration</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{summaryMetrics.averageBookingDuration} min</p>
            <p className="text-sm text-gray-600">Across all services</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Calendar View (July/August)</h2>
            <div className="grid grid-cols-7 text-center gap-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="font-semibold text-gray-700 text-sm">{day}</div>
              ))}
              {Array.from({ length: 27 }).map((_, i) => (
                <div key={`empty-${i}`} className="p-2 text-gray-400"></div>
              ))}
              {calendarDays.map((dayData, index) => (
                <div key={`day-${index}`} className={`p-2 rounded-md ${dayData.bookings.length > 0 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'} flex flex-col items-center justify-center min-h-[80px]`}>
                  <p className="font-bold text-lg text-gray-800">{dayData.date}</p>
                  {dayData.bookings.length > 0 && (
                    <div className="text-xs text-blue-600 mt-1">
                      {dayData.bookings.map((b, i) => (
                        <p key={i}>{b.time} - {b.event}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Bookings</h2>
            <ul className="divide-y divide-gray-200">
              {upcomingBookings.map(booking => (
                <li key={booking.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{booking.name} - {booking.client}</p>
                    <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {booking.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Heatmap of Busy Hours/Days</h2>
          <p className="text-sm text-gray-600 mb-4">Darker shades indicate more bookings/busyness.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hour</th>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                    <th key={day} className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {busyHoursData.map((row, index) => (
                  <tr key={index} className="divide-y divide-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{row.hour}</td>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                      <td key={day} className="px-4 py-2 whitespace-nowrap text-sm text-center">
                        <div className={`w-10 h-10 rounded-md mx-auto flex items-center justify-center text-white font-bold ${getHeatmapColor(row[day])}`}>
                          {row[day] > 0 ? row[day] : ''}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// SalesProductPerformance Component
const SalesProductPerformance = () => {
  const mockSalesData = {
    summaryMetrics: {
      totalRevenueThisMonth: 25800,
      totalOrdersThisMonth: 315,
      averageOrderValue: 81.90,
      abandonedCartsThisWeek: 52,
      recoveryRate: 15, // percentage
      websiteConversionRate: 2.3, // percentage
    },
    salesTrendData: [
      { date: 'Jul 1', sales: 750 },
      { date: 'Jul 2', sales: 820 },
      { date: 'Jul 3', sales: 900 },
      { date: 'Jul 4', sales: 780 },
      { date: 'Jul 5', sales: 1100 },
      { date: 'Jul 6', sales: 1050 },
      { date: 'Jul 7', sales: 980 },
      { date: 'Jul 8', sales: 1200 },
      { date: 'Jul 9', sales: 950 },
      { date: 'Jul 10', sales: 1300 },
      { date: 'Jul 11', sales: 1150 },
      { date: 'Jul 12', sales: 1000 },
      { date: 'Jul 13', sales: 1400 },
      { date: 'Jul 14', sales: 1250 },
      { date: 'Jul 15', sales: 1180 },
      { date: 'Jul 16', sales: 1500 },
      { date: 'Jul 17', sales: 1350 },
      { date: 'Jul 18', sales: 1280 },
      { date: 'Jul 19', sales: 1600 },
      { date: 'Jul 20', sales: 1450 },
      { date: 'Jul 21', sales: 1380 },
      { date: 'Jul 22', sales: 1700 },
      { date: 'Jul 23', sales: 1550 },
      { date: 'Jul 24', sales: 1480 },
      { date: 'Jul 25', sales: 1800 },
    ],
    salesByCategoryData: [
      { category: 'Online Courses', sales: 12000 },
      { category: 'Ebooks', sales: 7500 },
      { category: 'Consulting', sales: 4000 },
      { category: 'Templates', sales: 2300 },
    ],
    topProducts: [
      { id: 1, name: 'Mastering React Course', revenue: 7500, unitsSold: 50, imageUrl: 'https://placehold.co/60x60/8884d8/ffffff?text=RC' },
      { id: 2, name: 'Ultimate Productivity Ebook', revenue: 4200, unitsSold: 200, imageUrl: 'https://placehold.co/60x60/82ca9d/ffffff?text=EB' },
      { id: 3, name: '1-on-1 Strategy Session', revenue: 3000, unitsSold: 10, imageUrl: 'https://placehold.co/60x60/ffc658/ffffff?text=SS' },
    ],
  };

  const { summaryMetrics, salesTrendData, salesByCategoryData, topProducts } = mockSalesData;

  const formatCurrency = (value) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatPercentage = (value) => `${value}%`;
  const formatNumber = (value) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Sales & Product Performance
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Total Revenue (This Month)</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatCurrency(summaryMetrics.totalRevenueThisMonth)}</p>
            <p className="text-sm text-gray-600">Year-to-date: $150,000</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Total Orders (This Month)</p>
            <p className="text-3xl font-extrabold text-green-600 mt-1">{formatNumber(summaryMetrics.totalOrdersThisMonth)}</p>
            <p className="text-sm text-gray-600">New orders received</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Average Order Value</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatCurrency(summaryMetrics.averageOrderValue)}</p>
            <p className="text-sm text-gray-600">Per transaction</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Website Conversion Rate</p>
            <p className="text-3xl font-extrabold text-teal-600 mt-1">{formatPercentage(summaryMetrics.websiteConversionRate)}</p>
            <p className="text-sm text-gray-600">Visitors to buyers</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Sales Trend (Last 30 Days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={formatCurrency} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => formatCurrency(value)}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                {/* Removed linearGradient and defs, using solid fill */}
                <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#60A5FA" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Per Product Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesByCategoryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="category" stroke="#6b7280" angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="#6b7280" tickFormatter={formatCurrency} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Bar dataKey="sales" fill="#82ca9d" barSize={40} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Top 3 Products</h2>
            <ul className="divide-y divide-gray-200">
              {topProducts.map(product => (
                <li key={product.id} className="py-3 flex items-center">
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 rounded-md mr-4 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/cccccc/000000?text=N/A"; }} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">Revenue: {formatCurrency(product.revenue)} | Units: {product.unitsSold}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Abandoned Cart Statistics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Abandoned Carts (This Week)</p>
                <p className="text-2xl font-extrabold text-red-600 mt-1">{summaryMetrics.abandonedCartsThisWeek}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Recovery Rate</p>
                <p className="text-2xl font-extrabold text-orange-600 mt-1">{formatPercentage(summaryMetrics.recoveryRate)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// CrmDashboard Component
const CrmDashboard = () => {
  const mockCrmData = {
    summaryMetrics: {
      totalLeads: 1250,
      newLeadsThisMonth: 180,
      conversionRate: 15.2, // percentage
      activeDeals: 45,
      pipelineValue: 75000,
    },
    leadSourceData: [
      { name: 'Website', value: 400 },
      { name: 'Referral', value: 300 },
      { name: 'Social Media', value: 250 },
      { name: 'Partnership', value: 150 },
      { name: 'Other', value: 100 },
    ],
    dealStageData: [
      { name: 'Qualification', value: 15 },
      { name: 'Proposal', value: 10 },
      { name: 'Negotiation', value: 8 },
      { name: 'Closed Won', value: 7 },
      { name: 'Closed Lost', value: 5 },
    ],
    recentActivities: [
      { id: 1, type: 'Call', contact: 'Alice Wonderland', detail: 'Discussed project requirements.', time: '1 hour ago' },
      { id: 2, type: 'Email', contact: 'Bob The Builder', detail: 'Sent proposal for new website.', time: '3 hours ago' },
      { id: 3, type: 'Meeting', contact: 'Charlie Chaplin', detail: 'Follow-up on product demo.', time: '1 day ago' },
      { id: 4, type: 'Note', contact: 'Diana Prince', detail: 'Client prefers email communication.', time: '2 days ago' },
    ],
    upcomingTasks: [
      { id: 1, task: 'Follow up with New Lead - Emily', date: 'July 29', time: '10:00 AM' },
      { id: 2, task: 'Prepare proposal for Green Solutions', date: 'July 30', time: '2:00 PM' },
      { id: 3, task: 'Client check-in call - John Doe', date: 'August 1', time: '9:00 AM' },
    ]
  };

  const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

  const { summaryMetrics, leadSourceData, dealStageData, recentActivities, upcomingTasks } = mockCrmData;

  const formatCurrency = (value) => `$${value.toLocaleString()}`;
  const formatPercentage = (value) => `${value}%`;
  const formatNumber = (value) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          CRM Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Total Leads</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatNumber(summaryMetrics.totalLeads)}</p>
            <p className="text-sm text-gray-600">All-time count</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">New Leads (This Month)</p>
            <p className="text-3xl font-extrabold text-green-600 mt-1">{formatNumber(summaryMetrics.newLeadsThisMonth)}</p>
            <p className="text-sm text-gray-600">Recently added</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-1">{formatPercentage(summaryMetrics.conversionRate)}</p>
            <p className="text-sm text-gray-600">Lead to customer</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Active Deals</p>
            <p className="text-3xl font-extrabold text-orange-600 mt-1">{summaryMetrics.activeDeals}</p>
            <p className="text-sm text-gray-600">Currently in pipeline</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">Pipeline Value</p>
            <p className="text-3xl font-extrabold text-teal-600 mt-1">{formatCurrency(summaryMetrics.pipelineValue)}</p>
            <p className="text-sm text-gray-600">Potential revenue</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Leads by Source</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value, name) => [`${value.toLocaleString()} leads`, name]}
                />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Deals by Stage</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dealStageData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#6b7280" angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                  labelStyle={{ color: '#333' }}
                  itemStyle={{ color: '#666' }}
                  formatter={(value) => `${value} deals`}
                />
                <Bar dataKey="value" fill="#82ca9d" barSize={40} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <ul className="divide-y divide-gray-200">
              {recentActivities.map(activity => (
                <li key={activity.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.type}: {activity.contact}</p>
                    <p className="text-sm text-gray-600">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
            <ul className="divide-y divide-gray-200">
              {upcomingTasks.map(task => (
                <li key={task.id} className="py-3">
                  <p className="text-sm font-medium text-gray-900">{task.task}</p>
                  <p className="text-sm text-gray-600">{task.date} at {task.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// AutomationWorkflowVisualizer Component
const AutomationWorkflowVisualizer = () => {
  const mockWorkflowData = {
    workflowExamples: [
      {
        id: 1,
        name: 'New Lead Automation',
        description: 'Automate your lead capture and follow-up process.',
        steps: [
          { type: 'trigger', app: 'Calendly', action: 'New Event Booked' },
          { type: 'action', app: 'HubSpot CRM', action: 'Add Contact' },
          { type: 'action', app: 'Mailchimp', action: 'Send Welcome Email' },
          { type: 'action', app: 'Slack', action: 'Notify Sales Team' },
        ],
        ifThenThat: "When a **new Calendly event** is booked, then **add the contact to HubSpot CRM**, **send a welcome email via Mailchimp**, and **notify the sales team in Slack**."
      },
      {
        id: 2,
        name: 'E-commerce Order Fulfillment',
        description: 'Streamline your online order processing.',
        steps: [
          { type: 'trigger', app: 'Shopify', action: 'New Order Placed' },
          { type: 'action', app: 'ShipStation', action: 'Create Shipping Label' },
          { type: 'action', app: 'Twilio', action: 'Send Order Confirmation SMS' },
        ],
        ifThenThat: "When a **new Shopify order** is placed, then **create a shipping label in ShipStation** and **send an order confirmation SMS via Twilio**."
      },
      {
        id: 3,
        name: 'Customer Feedback Loop',
        description: 'Automate collecting and acting on customer feedback.',
        steps: [
          { type: 'trigger', app: 'Typeform', action: 'New Form Submission' },
          { type: 'action', app: 'Google Sheets', action: 'Add Row' },
          { type: 'action', app: 'Asana', action: 'Create Follow-up Task' },
        ],
        ifThenThat: "When a **new Typeform submission** comes in, then **add a new row to Google Sheets** and **create a follow-up task in Asana**."
      },
    ],
  };

  const WorkflowStep = ({ app, action, type }) => (
    <div className={`flex items-center justify-center p-4 rounded-lg shadow-md text-center
      ${type === 'trigger' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
      <div className="font-semibold text-lg">{app}</div>
      <div className="text-sm mt-1">{action}</div>
    </div>
  );

  const { workflowExamples } = mockWorkflowData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Automation Workflow Visualizer
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
          See how different tools can connect to automate your business processes.
        </p>
        <div className="space-y-12">
          {workflowExamples.map((workflow) => (
            <div key={workflow.id} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{workflow.name}</h2>
              <p className="text-gray-600 mb-6">{workflow.description}</p>
              <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 relative py-4">
                {workflow.steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <WorkflowStep app={step.app} action={step.action} type={step.type} />
                    {index < workflow.steps.length - 1 && (
                      <div className="flex flex-col items-center md:flex-row">
                        <svg className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="text-xs text-gray-500 mt-1 md:ml-2 md:mt-0">then</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-700">
                <p className="font-semibold mb-2">If this then that:</p>
                <p dangerouslySetInnerHTML={{ __html: workflow.ifThenThat.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Build Your Own Flow (Mocked)</h2>
          <p className="text-gray-600 mb-6">Select a trigger and an action to see how your custom app could look.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <select
              className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 shadow-sm"
              aria-label="Trigger App"
            >
              <option value="">Select Trigger App</option>
              <option value="calendly">Calendly</option>
              <option value="shopify">Shopify</option>
              <option value="typeform">Typeform</option>
            </select>
            <span className="text-gray-600 font-medium">then</span>
            <select
              className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 shadow-sm"
              aria-label="Action App"
            >
              <option value="">Select Action App</option>
              <option value="hubspot">HubSpot CRM</option>
              <option value="mailchimp">Mailchimp</option>
              <option value="slack">Slack</option>
              <option value="shipstation">ShipStation</option>
              <option value="twilio">Twilio</option>
              <option value="googlesheets">Google Sheets</option>
              <option value="asana">Asana</option>
            </select>
            <button
              onClick={() => alert('Demo: Your custom flow is being built! (No real functionality)')}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-150"
            >
              Connect
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Let's build this for your business
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- START NEW Jovial Showcase Component ---
const JovialAppShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center relative overflow-hidden">
          {/* Live Demo Badge */}
          <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
            LIVE DEMO
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jovial: A Full-Stack Showcase
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            This is my first full-stack application, a platform that connects event planners with other service providers and helpers. It demonstrates my ability to build a comprehensive, real-world application from the ground up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
            <div className="flex items-start bg-blue-50 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-blue-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-1.5-1-2.9-3.5-3.8A4 4 0 1 0 19 20" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Seamless Collaboration</h3>
                <p className="text-gray-600 mt-1">
                  A platform to connect event planners with the helpers they need, from decorators to photographers.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-green-50 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-green-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Comprehensive Dashboard</h3>
                <p className="text-gray-600 mt-1">
                  Organize clients, manage tasks, track invoicing, and find new project opportunities, all in one place.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-yellow-50 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-yellow-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Public Searchability</h3>
                <p className="text-gray-600 mt-1">
                  Allows event planners and helpers to be discovered by people looking to organize parties, weddings, and work events.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-purple-50 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-purple-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Demonstrates Full-Stack Skills</h3>
                <p className="text-gray-600 mt-1">
                  A live application showcasing proficiency in both front-end and back-end development.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://jovial.modulet.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore the Live Demo
              <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- END NEW Jovial Showcase Component ---

// Placeholder for icons (now uses Lucide React components)
const IconPlaceholder = ({ children }) => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 mr-3">
    {children}
  </div>
);

const DemoModal = ({ demoContent, title, onClose }) => {
  if (!demoContent) return null;

  const DemoComponent = demoContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 overflow-y-auto">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-2 transition duration-150"
            aria-label="Close demo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Demo Content Area */}
        <div className="flex-grow overflow-y-auto">
          <DemoComponent />
        </div>
      </div>
    </div>
  );
};



// Main Landing Page Component
const LandingPage = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(null);
  const [currentDemoTitle, setCurrentDemoTitle] = useState('');

  // Define your demos for the sidebar
  const demos = [
    // Jovial is now the first item in the list
    { id: 'Jovial-showcase', title: 'Jovial: Event Platform', component: JovialAppShowcase, icon: <Calendar size={20} /> },
    { id: 'business-dashboard', title: 'Business Overview Dashboard', component: BusinessDashboard, icon: <LayoutDashboard size={20} /> },
    { id: 'newsletter-tracker', title: 'Newsletter & Campaign Analytics', component: NewsletterCampaignTracker, icon: <Mail size={20} /> },
    { id: 'bookings-events', title: 'Event & Booking Tracker', component: BookingsEventOverview, icon: <Calendar size={20} /> },
    { id: 'sales-performance', title: 'Sales & Product Performance', icon: <TrendingUp size={20} />, component: SalesProductPerformance },
    { id: 'crm-dashboard', title: 'Customer Relationship Management', component: CrmDashboard, icon: <Users size={20} /> },
    { id: 'automation-workflow', title: 'Automation Workflow Visualizer', component: AutomationWorkflowVisualizer, icon: <Workflow size={20} /> },
  ];

  const openDemo = (demo) => {
    setCurrentDemo(() => demo.component);
    setCurrentDemoTitle(demo.title);
    setShowDemoModal(true);
  };

  const closeDemo = () => {
    setShowDemoModal(false);
    setCurrentDemo(null);
    setCurrentDemoTitle('');
  };

  return (


    <div className="relative min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Fixed Sidebar for Demos (Desktop) */}
      <div className="hidden lg:block fixed right-0 top-0 h-full w-72 bg-white shadow-lg p-6 overflow-y-auto z-40 border-l border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Live Demos & Showcases</h3>
        <nav className="space-y-4">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => openDemo(demo)}
              className="flex items-center w-full p-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 hover:shadow-md transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 relative"
            >
              <IconPlaceholder>{demo.icon}</IconPlaceholder>
              <span className="font-medium text-gray-700 text-left flex-grow">{demo.title}</span>
              {demo.live && (
                <span className="text-xs font-bold text-green-700 bg-green-200 rounded-full px-2 py-0.5 ml-2">
                  LIVE
                </span>
              )}
              <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          ))}
        </nav>
        <div className="mt-8 text-center">
          <a
            href="https://calendly.com/pflashgary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300"
          >
            Request Your First Module
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:mr-72 p-4 sm:p-6 lg:p-10">
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-400 text-white rounded-xl shadow-xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            I Build Custom Web Applications for Small to Medium Businesses.
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Custom. Clean. Feedback-driven. No bloated tools.
          </p>
          <a
            href="https://calendly.com/pflashgary" // Placeholder for actual contact page
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-semibold rounded-full shadow-lg text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 transform hover:-translate-y-1"
          >
            Book a free consult
            <svg className="ml-3 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </section>

        <section id="how-it-works" className="py-16 text-center bg-white rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">What modulet.dev offers?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full text-3xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Custom web apps from scratch</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-3xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Start with working frontend demos</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full text-3xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Tailored to your business workflows</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-3xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Light monthly support</h3>
            </div>
          </div>
        </section>

        {/* Mobile Demo Section (visible only on smaller screens) */}
        <section className="lg:hidden py-12 bg-white rounded-xl shadow-lg mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">See Our Demos in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => openDemo(demo)}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <IconPlaceholder>{demo.icon}</IconPlaceholder>
                <span className="font-medium text-gray-700 text-center mt-2">{demo.title}</span>
              </button>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-16 bg-blue-50 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">Who Benefits from modulet.dev?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {[
              {
                title: 'Coaches & Therapists',
                description: 'Manage scheduling, progress tracking, and client notes all in one place.'
              },
              {
                title: 'Event Planners',
                description: 'Handle registrations, payments, guest lists, and follow-ups with ease.'
              },
              {
                title: 'Rental Services',
                description: 'Automate bookings, contracts, and inventory tracking effortlessly.'
              },
              {
                title: 'Tutors & Course Creators',
                description: 'Offer lessons, track student progress, and manage content delivery smoothly.'
              },
              {
                title: 'Freelancers & Creatives',
                description: 'Provide client portals, project tracking, and delivery systems.'
              },
              {
                title: 'Local Retail & Services',
                description: 'Support booking, loyalty, delivery, and inventory tools tailored to your store.'
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* How It Works Section */}
        <section className="py-16 text-center bg-white rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">How modulet.dev works</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
            {[
              { title: 'You tell me what you need', description: 'Describe your workflow or pain points, what’s repetitive, manual, or missing.' },
              { title: 'I design & show you a working UI', description: 'You’ll see a prototype you can click through and provide feedback on.' },
              { title: 'We build it out together', description: 'Once it clicks for you, we iterate quickly and integrate it into your workflow.' },
              { title: 'Flexible pricing & ongoing support', description: 'Fair pricing based on scope. I offer monthly maintenance to keep things smooth.' },
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm">
                <div className="flex-shrink-0 mr-5 mt-1">
                  <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center py-16 bg-blue-500 text-white rounded-xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Build Your App?</h2>
          <a
            href="https://calendly.com/pflashgary" // Placeholder for actual contact page
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-semibold rounded-full shadow-lg text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 transform hover:-translate-y-1"
          >
            Schedule a Free Demo Call
            <svg className="ml-3 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-800">modulet.dev</h4>
              <p className="text-sm mt-1">Custom lean apps for small businesses, fast.</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm">
                📧 <a href="mailto:pflashgary@gmail.com" className="underline hover:text-gray-900">pflashgary@gmail.com</a>
              </p>
              <p className="text-sm mt-1">
                🔗 <a href="https://www.linkedin.com/in/pflashgary/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">LinkedIn</a>
              </p>
            </div>
          </div>
        </footer>


      </div>

      {/* Demo Modal - Conditionally rendered */}
      {showDemoModal && (
        <DemoModal
          demoContent={currentDemo}
          title={currentDemoTitle}
          onClose={closeDemo}
        />
      )}
    </div>
  );
};

// Main App Component that renders the LandingPage
export default function App() {
  return (
    <>
      <React.StrictMode>
        <LandingPage />
      </React.StrictMode>
    </>
  );
}