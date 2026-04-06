import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, User, Clock, MessageSquare, RefreshCw } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/contact/messages`);
      setMessages(response.data);
      toast({
        title: "Messages Loaded",
        description: `Found ${response.data.length} contact messages`,
      });
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/20 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Contact Messages
            </h1>
            <p className="text-slate-600">
              View all messages received from your portfolio contact form
            </p>
          </div>
          <Button
            onClick={fetchMessages}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <RefreshCw className={`mr-2 ${loading ? 'animate-spin' : ''}`} size={20} />
            Refresh
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="text-slate-600 mt-4">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <Card className="p-12 text-center">
            <MessageSquare className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No messages yet
            </h3>
            <p className="text-slate-600">
              Messages from your contact form will appear here
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <Card
                key={message.id}
                className="p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="text-emerald-600" size={20} />
                      <h3 className="text-xl font-semibold text-slate-800">
                        {message.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="text-slate-400" size={16} />
                      <a
                        href={`mailto:${message.email}`}
                        className="text-emerald-600 hover:underline"
                      >
                        {message.email}
                      </a>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg mb-3">
                      <p className="text-slate-700 whitespace-pre-wrap">
                        {message.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={16} />
                      <span>Received: {formatDate(message.created_at)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Database Information</h3>
          <p className="text-blue-800 text-sm">
            <strong>Collection:</strong> contact_messages
          </p>
          <p className="text-blue-800 text-sm">
            <strong>Database:</strong> MongoDB (check your backend .env for DB_NAME)
          </p>
          <p className="text-blue-800 text-sm mt-2">
            All messages are automatically saved when someone submits the contact form on your portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
