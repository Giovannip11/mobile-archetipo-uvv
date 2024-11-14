import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nicvgxdupyqabzggjoxl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pY3ZneGR1cHlxYWJ6Z2dqb3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODg5MzgsImV4cCI6MjA0MjY2NDkzOH0.m8Zu4wuQsg6pfPqOoEn5AmYourQTeZGXghA-D3Dlhug';

export const supabase = createClient(supabaseUrl, supabaseKey);
