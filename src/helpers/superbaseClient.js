

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rfjuxxcqcuhsbaczdrci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmanV4eGNxY3Voc2JhY3pkcmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5OTY5NDcsImV4cCI6MTk5ODU3Mjk0N30.zINIKN9ryFDnVLrL7gvT8--3xkosWdHTOuIvy4mYo8I';
export const supabase = createClient(supabaseUrl, supabaseKey)
