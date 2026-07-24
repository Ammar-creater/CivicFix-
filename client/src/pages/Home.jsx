import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  PlusCircle, 
  TrendingUp, 
  ShieldAlert, 
  FileText 
} from 'lucide-react';

const Home = () => {
  // Mock reports for visualization
  const [mockReports] = useState([
    {
      id: 1,
      category: 'Road Damage',
      description: 'Massive pothole in the middle of the left lane on Main Street, causing cars to swerve dangerously.',
      location: 'Main St & 4th Ave',
      status: 'In Progress',
      date: '2 hours ago',
      photoUrl: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      category: 'Water Leak',
      description: 'Water main burst flooding the sidewalk near the public library. Clean water has been wasting for hours.',
      location: '120 Library Lane',
      status: 'Reported',
      date: '5 hours ago',
      photoUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      category: 'Streetlight Broken',
      description: 'Two consecutive streetlights are completely out near the dark alley, making it unsafe for walkers at night.',
      location: 'Pine Blvd near Central Park',
      status: 'Resolved',
      date: '1 day ago',
      photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
    }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Resolved':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
            <CheckCircle className="h-3 w-3" /> Resolved
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
            <Clock className="h-3 w-3" /> In Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
            <ShieldAlert className="h-3 w-3" /> Reported
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Hero Section */}
      <header className="relative py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase mb-6 shadow-sm">
          Empowering Communities
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Report Civic Problems. <br />
          <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text">Fix Your Neighborhood.</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          CivicFix lets citizens report local issues like potholes, broken streetlights, and leaks directly to municipal departments. Track real-time progress on a live map.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5"
          >
            <PlusCircle className="h-4.5 w-4.5" />
            <span>File a Report</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:border-slate-700 hover:-translate-y-0.5"
          >
            <FileText className="h-4.5 w-4.5 text-slate-400" />
            <span>View All Reports</span>
          </Link>
        </div>
      </header>

      {/* Metrics Section */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
          <div className="h-10 w-10 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 border border-sky-500/20">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Filed</p>
            <h3 className="text-3xl font-extrabold mt-1">1,482</h3>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
          <div className="h-10 w-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 border border-amber-500/20">
            <Clock className="h-5 w-5" />
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">In Progress</p>
            <h3 className="text-3xl font-extrabold mt-1">324</h3>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
          <div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/20">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Resolved</p>
            <h3 className="text-3xl font-extrabold mt-1">1,158</h3>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
          <div className="h-10 w-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 border border-pink-500/20">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Resolution Rate</p>
            <h3 className="text-3xl font-extrabold mt-1">78.1%</h3>
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="px-6 max-w-5xl mx-auto mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Recent Problem Reports</h2>
            <p className="text-slate-400 text-sm mt-1">Real-time reports filed by neighbors in your area</p>
          </div>
          <Link to="/login" className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
            View Map Dashboard &rarr;
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {mockReports.map((report) => (
            <div 
              key={report.id} 
              className="group bg-slate-900/30 hover:bg-slate-900/60 border border-slate-900/80 hover:border-slate-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/[0.01]"
            >
              {/* Report Image */}
              <div className="w-full md:w-48 h-32 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0 border border-slate-800/50">
                <img 
                  src={report.photoUrl} 
                  alt={report.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Report Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{report.category}</span>
                    <span className="text-slate-500 text-xs">{report.date}</span>
                  </div>
                  <h4 className="text-slate-200 text-base font-medium mt-2 leading-relaxed">{report.description}</h4>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-900/50">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500/80" />
                    <span>{report.location}</span>
                  </div>
                  {getStatusBadge(report.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
